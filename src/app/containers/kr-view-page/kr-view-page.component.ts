import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KRCardDetail } from 'src/app/models/card-detail.model';
import { KRCard } from 'src/app/models/card.model';
import { selectedKR, selectFilteredKRList, selectKRList, selectSortedKRList } from 'src/app/state/kr.selectors';
import * as KRPageActions from '../../state/kr-page.action';

@Component({
  selector: 'app-kr-view-page',
  templateUrl: './kr-view-page.component.html',
  styleUrls: ['./kr-view-page.component.scss']
})
export class KrViewPageComponent implements OnInit {

  krList$: Observable<KRCard[]>;
  selectedKR$: Observable<KRCardDetail | null>;
  isKRSelected: boolean = false;
  appName: string = 'KR-Viewer';

  constructor(private store: Store) {
    this.krList$ = this.store.pipe(select(selectSortedKRList));
    this.selectedKR$ = this.store.pipe(select(selectedKR));
  }

  ngOnInit(): void {
    this.store.dispatch(KRPageActions.enter());
    this.store.dispatch(KRPageActions.getSortByOptions())
  }

  onSelectKR(card: KRCard) {
    this.store.dispatch(KRPageActions.cardSelected({card}));
    this.isKRSelected = true;
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  onClearKR() {
    this.store.dispatch(KRPageActions.cardCleared());
    this.isKRSelected = false;
  }

}
