import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    CommonModule,
    BtnComponent,
    OverlayModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen = false;
}
