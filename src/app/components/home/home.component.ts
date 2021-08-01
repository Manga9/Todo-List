import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private taskServ: TasksService) {
  }

  ngOnInit(): void {
  }


  addTask(form: NgForm) : void {
    if(form.value.task != '' && form.value.task != null) {
      let Uid = Math.random().toString(16)
      this.taskServ.addTask(Uid, form.value.task, false)
      form.reset()
      window.location.reload();
    }
  }
}
