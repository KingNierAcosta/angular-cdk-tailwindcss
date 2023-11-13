import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';
import { DestroyComponent } from '../../components/destroy/destroy.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [
    CommonModule,
    NavbarComponent,
    DragDropModule,
    DialogModule,
  ]
})
export class BoardComponent extends DestroyComponent {


  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
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
    },
    {
      title: 'Doing',
      todos: [
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
    },
    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'Play video'
        }
      ]
    }
  ]

  constructor(
    private dialog: Dialog
  ) { super() }

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

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo
      }
    })
    dialogRef.closed
      .pipe(takeUntil(this.destroy$))
      .subscribe(output => {
        console.log(output);
      })
  }
}
