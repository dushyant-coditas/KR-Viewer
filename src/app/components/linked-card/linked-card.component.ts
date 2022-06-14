import { Component, Input, OnInit } from '@angular/core';
import { linkedCard } from 'src/app/models/card-detail.model';
import { StateEnum } from 'src/app/models/enums.model';

@Component({
  selector: 'app-linked-card',
  templateUrl: './linked-card.component.html',
  styleUrls: ['./linked-card.component.scss']
})
export class LinkedCardComponent implements OnInit {

  @Input() card: linkedCard | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('****', this.card)
  }

  getClass() {
    return {
      'qa': this.card?.state === StateEnum.QA,
      'stage': this.card?.state === StateEnum.STAGE,
      'prod': this.card?.state === StateEnum.PROD
    }
  }

}
