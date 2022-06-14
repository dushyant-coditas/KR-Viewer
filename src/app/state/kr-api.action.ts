import { createAction, props } from "@ngrx/store";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard } from "../models/card.model";
import { SelectOption } from "../models/data.model";

export const krListLoaded = createAction(
    '[KR API] KR List Success',
    props<{ list: KRCard[] }>()
);

export const getSelectedKR = createAction(
    '[KR API] Get Slected KR Success',
    props<{ krCardDetails: KRCardDetail }>()
);