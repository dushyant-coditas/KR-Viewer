import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { KrService } from "../services/kr.service";
import * as KRPageActions from "./kr-page.action";
import * as KRAPIActions from "./kr-api.action";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard } from "../models/card.model";
@Injectable()
export class KREffects {
    constructor(private actions$: Actions, private krService: KrService){}
   
    // loadKRList$ = createEffect(() => this.actions$.pipe(
    //         ofType(KRPageActions.enter),
    //         exhaustMap(() => this.krService.getKRList().pipe(
    //                 map((list: KRCard[]) => this.krService.updateKrStatus(list).pipe(
    //                     map((list: any[]) => KRAPIActions.krListLoaded({list}))
    //                 ))
    //             ))
    //     ));
    loadKRList$ = createEffect(() => this.actions$.pipe(
      ofType(KRPageActions.enter),
      mergeMap(() => this.krService.getKRList()),
      mergeMap((list: any[]) => this.krService.updateKrStatus(list).pipe(
          map((list) => KRAPIActions.krListLoaded({list}))
      ))  
    ));

    loadSortByOptions$ = createEffect(() => this.actions$.pipe(
            ofType(KRPageActions.getSortByOptions),
            mergeMap(() => this.krService.getSortOptions().pipe(
                map(options => KRPageActions.getSortByOptionsSuccess({options}))
            ))
        ));

    loadKRCardDetails$ = createEffect(() => this.actions$.pipe(
        ofType(KRPageActions.cardSelected),
        exhaustMap((action: { card: KRCard }) => this.krService.getSelectedKR(action.card.id)
        .pipe(
            map((card: any) => KRAPIActions.getSelectedKR({krCardDetails: card}))
        ))
    ))
}