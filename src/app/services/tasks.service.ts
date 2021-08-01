import { Injectable, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit {

  tasks : Array<Task> = []

  constructor() {
    let savedTasks = localStorage.getItem('allTasks')
    if(savedTasks) {
      this.tasks = JSON.parse(savedTasks)
    } else {
      this.tasks = []
    }
  }

  ngOnInit() {
  }

  saveTasksToLocalStorage() {
    localStorage.setItem('allTasks', JSON.stringify(this.tasks))
  }

  addTask(id: string, task: string, isCompleted: false) {
    this.tasks.push({
      id, task, isCompleted
    })
    this.saveTasksToLocalStorage()
  }

  updateTask(index: number, newTask: string) {
    this.tasks[index].task = newTask
    this.saveTasksToLocalStorage()
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage()
    window.location.reload()
  }

  getAllTasks() {
    return this.tasks
  }
}
