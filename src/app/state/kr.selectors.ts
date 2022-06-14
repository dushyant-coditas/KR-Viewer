import { createFeatureSelector, createSelector } from "@ngrx/store";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard } from "../models/card.model";
import { StateEnum } from "../models/enums.model";
import { State } from "./kr.reducers";

export const selectRoot = (state: any) => state.krs;


export const selectKRList = createSelector(
    selectRoot,
    (state: State) => state.list
);

export const selectSortByOptions = createSelector(
    selectRoot,
    (state: State) => state.sortByOptions
);

export const selectKRLoading = createSelector(
    selectRoot,
    (state: State) => state.loading
);

export const selectActiveStates = createSelector(
    selectRoot,
    (state: State) => state.activeStates
);

export const selectSortBySelectedOption = createSelector(
    selectRoot,
    (state: State) => state.sortBySelectedOption
);

export const selectFilteredKRList = createSelector(
    selectKRList,
    selectActiveStates,
    (list: KRCard[], activeStates: string[]) => {
        if(activeStates.length == 1 && activeStates[0] === StateEnum.ALL)
            return list;
        return list.filter(kr => activeStates.some(state => state === kr.state));
    }
);

export const selectSortedKRList = createSelector(
    selectFilteredKRList,
    selectSortBySelectedOption,
    (list: KRCard[], sortBy: number) => {
        console.log(list);
        return list.slice().sort((a, b) => {
            switch(sortBy) {
                case 1:
                    return b.krCardNumber.localeCompare(a.krCardNumber);
                case 2:
                    return a.krCardNumber.localeCompare(b.krCardNumber);;
                case 3:
                    return b.date.localeCompare(a.date);
                default:
                    return a.date.localeCompare(b.date);
            }
        })
    }
);

export const selectedKR = createSelector(
    selectRoot,
    (state: State) => state.activeKR
);

export const selectedKRId = createSelector(
    selectedKR,
    (KrCard: any) => KrCard.card.id
);
