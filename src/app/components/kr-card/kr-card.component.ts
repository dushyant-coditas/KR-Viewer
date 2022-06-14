import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KRCard } from 'src/app/models/card.model';
import { KrService } from 'src/app/services/kr.service';
import { StateEnum } from '../../models/enums.model';

@Component({
  selector: 'app-kr-card',
  templateUrl: './kr-card.component.html',
  styleUrls: ['./kr-card.component.scss']
})
export class KrCardComponent implements OnInit {

  @Input() kr: KRCard | undefined;

  constructor(private krService: KrService) {
    
  }

  ngOnInit(): void {
  }

  getClass() {
    return {
      'qa': this.kr?.state === StateEnum.QA,
      'stage': this.kr?.state === StateEnum.STAGE,
      'prod': this.kr?.state === StateEnum.PROD
    }
  }

  getButtonClass() {
    return {
      'success': this.kr?.status,
      'failure': !this.kr?.status
    }
  }

}
