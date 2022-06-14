import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectOption } from 'src/app/models/data.model';
import { sortBySelected } from 'src/app/state/kr-page.action';
import { selectSortByOptions } from 'src/app/state/kr.selectors';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() appName: string = '';
  sortOptions$: Observable<SelectOption[]>;
  sortBySelect = 1;
  
  constructor(private store: Store) { 
    this.sortOptions$ = this.store.pipe(select(selectSortByOptions));
  }

  ngOnInit(): void {
  }

  sortBySelected(option: SelectOption) {
    this.store.dispatch(sortBySelected({value: option.value}));
  }

  logout() {
    console.log('logout');
  }

}
