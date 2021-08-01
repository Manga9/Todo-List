import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksControlComponent } from './tasks-control.component';

describe('TasksControlComponent', () => {
  let component: TasksControlComponent;
  let fixture: ComponentFixture<TasksControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
