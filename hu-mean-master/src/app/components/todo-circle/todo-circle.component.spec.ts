import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCircleComponent } from './todo-circle.component';

describe('TodoCircleComponent', () => {
  let component: TodoCircleComponent;
  let fixture: ComponentFixture<TodoCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
