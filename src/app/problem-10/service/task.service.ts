import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks: string[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks = this.tasks.includes(task) ? this.tasks : [...this.tasks, task]
    return this.tasks;
  }

  deleteTask(index: number) {
    if (index && index < this.tasks.length) {
      return this.tasks.splice(index, 1)
    }
    return this.tasks
  }
}
