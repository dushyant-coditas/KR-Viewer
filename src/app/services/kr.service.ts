import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { krDetailMockJson, krListMockJson, sortByOptions } from '../mocks/kr-mock';
import { linkedCard } from '../models/card-detail.model';
import { KRCard } from '../models/card.model';
import { StateEnum, stateValues } from '../models/enums.model';

@Injectable({
  providedIn: 'root'
})
export class KrService {

  constructor() { }

  getKRList() {
    return of(krListMockJson);
  }

  getSortOptions() {
    return of(sortByOptions);
  }

  getSelectedKR(id: number) {
    const selectedKR = krDetailMockJson.find(kr => kr.card.id === id);
    return of(selectedKR);
  }

  getKeyName(value: string) {
    return Object.entries(StateEnum).find(([key, val]) => val === value)?.[0];
  }

  updateKrStatus(list: KRCard[]) {
    console.log('HERE');
    list.forEach(kr => {
      // this.getSelectedKR(kr.id).pipe(
      //   map((selectedKR) => {
      //     const isInvalid = selectedKR?.linkedKrCards.some((card) => card.state < kr.state);
      //     kr.status = isInvalid ? false : true;
      //     console.log('STATUSSSS:', kr.status);
      //   })
      // )
      this.getSelectedKR(kr.id).subscribe((selectedKR) => {
          const krEnum = this.getKeyName(kr.state);
          const krStatus: StateEnum = StateEnum[krEnum as keyof typeof StateEnum];
          const isInvalid = selectedKR?.linkedKrCards.some((card) => {
            const cardEnum = this.getKeyName(card.state);
            if(krEnum && cardEnum){
              const cardStatus: StateEnum = StateEnum[cardEnum as keyof typeof StateEnum];
              console.log('#######');
              return (stateValues[cardStatus] < stateValues[krStatus]);
            }
            return true;
              
          });
          kr.status = isInvalid ? false : true;
        }
      )
    })
    return of(list);
  }
}
