import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmfrageAuswertungComponent } from './umfrage-auswertung.component';

describe('UmfrageAuswertungComponent', () => {
  let component: UmfrageAuswertungComponent;
  let fixture: ComponentFixture<UmfrageAuswertungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmfrageAuswertungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmfrageAuswertungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
