import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    CommonModule,
    BtnComponent,
    OverlayModule
  ]
})
export class NavbarComponent {
  isOpen = false;
}
