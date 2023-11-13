import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [
    CommonModule,
    NavbarComponent,
    DragDropModule
  ]
})
export class BoardComponent {

  toDoTasks: ToDo[] = [
    {
      id: '1',
      title: 'Create notifications'
    },
    {
      id: '2',
      title: 'Create overlay'
    },
    {
      id: '3',
      title: 'Implement user CRUD'
    },
  ]

  doingTasks: ToDo[] = [
    {
      id: '1',
      title: 'Add Guard to rutes'
    },
    {
      id: '2',
      title: 'Download attachments'
    },
    {
      id: '3',
      title: 'Take a photo'
    },
  ]

  doneTasks: ToDo[] = [
    {
      id: '1',
      title: 'Play video'
    }
  ]

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
