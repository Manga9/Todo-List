import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-tasks-control',
  templateUrl: './tasks-control.component.html',
  styleUrls: ['./tasks-control.component.css']
})
export class TasksControlComponent implements OnInit {

  constructor(private tasksServ: TasksService) { }

  tasksCount:number = this.tasksServ.tasks.length

  completedTaskCount: number= 0

  ngOnInit(): void {

  }


}
