import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrDetailComponent } from './kr-detail.component';

describe('KrDetailComponent', () => {
  let component: KrDetailComponent;
  let fixture: ComponentFixture<KrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
