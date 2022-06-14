import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrCardComponent } from './kr-card.component';

describe('KrCardComponent', () => {
  let component: KrCardComponent;
  let fixture: ComponentFixture<KrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
