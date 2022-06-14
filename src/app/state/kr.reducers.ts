import { Action, createReducer, on } from "@ngrx/store";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard } from "../models/card.model";
import { SelectOption } from "../models/data.model";
import { StateEnum } from "../models/enums.model";
import * as KRActions from './kr-page.action';
import * as KRAPIActions from './kr-api.action';

export interface State {
    list: KRCard[];
    sortByOptions: SelectOption[];
    sortBySelectedOption: number;
    activeStates: StateEnum[];
    loading: boolean;
    activeKR: KRCardDetail | null;
}

export const initialState: State = {
    list: [],
    sortByOptions: [],
    sortBySelectedOption: 1,
    activeStates: [StateEnum.ALL],
    loading: false,
    activeKR: null
}

export const KRReducers = createReducer(
    initialState,
    on(KRActions.enter, (state: State) => ({...state, loading: true})),
    on(KRAPIActions.krListLoaded, (state: State, action) => ({...state, list: action.list})),
    on(KRActions.getSortByOptionsSuccess, (state: State, action) => ({...state, sortByOptions: action.options})),
    on(KRActions.cardCleared, (state:State) => ({...state, activeKR: null, loading: true})),
    on(KRActions.sortBySelected, (state: State, action) => 
    ({...state, sortBySelectedOption: action.value})),
    on(KRAPIActions.getSelectedKR, (state: State, action) => ({...state, activeKR: action.krCardDetails})),
    on(KRActions.stateSelected, (state: State, action) => {
        // at least one state should be selected
        if(state.activeStates.length == 1 && state.activeStates[0] == action.selectedState) {
            return ({...state})
        }

        // is it active state
        const isItActiveState = state.activeStates.some(state => state === action.selectedState);

        // if yes, remove from store
        if(isItActiveState) {
            const idx = state.activeStates.indexOf(action.selectedState);
            const newStates = [...state.activeStates];
            newStates.splice(idx, 1);
            return ({...state, activeStates: [...newStates]});
        }

        // if not selected
        if(!isItActiveState) {
            // if selected category is All then we need to remove all items and add only all category
            // if selected category not All remove all if it's active or just add a new item
            if (action.selectedState === StateEnum.ALL) {
                return ({...state, activeStates: [StateEnum.ALL]});
            } else {
                const isAllActive = state.activeStates.some(state => state === StateEnum.ALL);
                if (isAllActive) {
                return ({...state, activeStates: [action.selectedState]});
                }
                return ({...state, activeStates: [...state.activeStates, action.selectedState]});
            }
        }
        return ({...state});
    })
);

export function reducer(state: State | undefined, action: Action) {
    return KRReducers(state, action);
}

