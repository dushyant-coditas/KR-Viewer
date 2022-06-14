import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedCardComponent } from './linked-card.component';

describe('LinkedCardComponent', () => {
  let component: LinkedCardComponent;
  let fixture: ComponentFixture<LinkedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
