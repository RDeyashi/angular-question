import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-problem-10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './problem-10.component.html',
  styleUrl: './problem-10.component.scss',
  providers: [TaskService]
})
export class Problem10Component {
  constructor(private taskService: TaskService) { }
  task: string = ''
  tasks: string[] = [];

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: string) {
    this.taskService.addTask(task);
    this.loadTasks();
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.loadTasks();
  }
}
