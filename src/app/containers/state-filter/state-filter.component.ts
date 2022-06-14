import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { stateList } from 'src/app/models/enums.model';
import { stateSelected } from 'src/app/state/kr-page.action';
import { selectActiveStates } from 'src/app/state/kr.selectors';


@Component({
  selector: 'app-state-filter',
  templateUrl: './state-filter.component.html',
  styleUrls: ['./state-filter.component.scss']
})
export class StateFilterComponent implements OnInit {

  states = stateList;
  activeStates$: Observable<string[]>;

  constructor(private store: Store) {
    this.activeStates$ = this.store.pipe(select(selectActiveStates));
   }

  ngOnInit(): void {
  }

  stateChange(ev: MatButtonToggleChange) {
    if(ev.source.value) {
      this.store.dispatch(stateSelected({selectedState: ev.source.value}));
    }
  }

}
