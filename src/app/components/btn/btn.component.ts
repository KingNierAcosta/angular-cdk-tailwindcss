import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: string = 'primary';

  get colors() {
    const colorsList: { [key: string]: string } = {
      success: 'text-white bg-success-700 hover:bg-success-800 focus:ring-success-300',
      danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',
      primary: 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300',
      'gray-light': 'text-gray-700 bg-gray-200 hover:bg-gray-500 focus:ring-gray-50'
    };
    return colorsList[this.color];
  }
}
