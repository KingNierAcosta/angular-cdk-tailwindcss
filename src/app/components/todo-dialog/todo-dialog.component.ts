import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo
}

interface OutputData {
  result: boolean
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss',
  imports: [
    CommonModule,
    FontAwesomeModule,
    BtnComponent
  ]
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close({
      result: true
    });
  }

}
