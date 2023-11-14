import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "../../components/btn/btn.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    CommonModule,
    BtnComponent,
    RouterModule
  ]
})
export class LoginComponent {

}
