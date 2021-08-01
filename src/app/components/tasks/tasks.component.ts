import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private tasksServ: TasksService) {
  }

  tasks : Array<Task> = this.tasksServ.tasks

  ngOnInit(): void {
  }

  deleteTask(index: number) {
    this.tasksServ.deleteTask(index);
  }
}
