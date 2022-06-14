import { createAction, props } from "@ngrx/store";
import { KRCard } from "../models/card.model";
import { SelectOption } from "../models/data.model";
import { StateEnum } from "../models/enums.model";

export const enter = createAction('[KR-View] enter')

export const getSortByOptions = createAction('[Feedbacks] Get Sort By Options');

export const getSortByOptionsSuccess = createAction(
    '[Feedbacks] Get Sort By Options Success', 
    props<{options: SelectOption[]}>()
);

export const sortBySelected = createAction(
    '[KR-View] Select Sort By',
    props<{ value: number }>()
);

export const stateSelected = createAction(
    '[KR-View] State selected',
    props<{ selectedState: StateEnum }>()
);

export const cardSelected = createAction(
    '[KR-View] Select card',
    props<{ card: KRCard }>()
);

export const cardCleared = createAction(
    '[KR-View] Clear Card',
);

