import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrViewPageComponent } from './kr-view-page.component';

describe('KrViewPageComponent', () => {
  let component: KrViewPageComponent;
  let fixture: ComponentFixture<KrViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
