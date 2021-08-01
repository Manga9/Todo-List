import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskId : any
  oldTask: Task = {id: '', task: '', isCompleted: false}
  constructor(private taskServ: TasksService, private actRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
     this.taskId = this.actRoute.snapshot.paramMap.get('id')
    this.oldTask = this.taskServ.tasks[this.taskId]
  }

  updateTask(newTask: NgForm) {
    this.taskServ.updateTask(this.taskId, newTask.value.task);
    this.router.navigate(['/'])
  }

}
