import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCircleObservablesComponent } from './box-circle-observables.component';

describe('BoxCircleObservablesComponent', () => {
  let component: BoxCircleObservablesComponent;
  let fixture: ComponentFixture<BoxCircleObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCircleObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCircleObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
