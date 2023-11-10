import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-boards',
    standalone: true,
    templateUrl: './boards.component.html',
    styleUrl: './boards.component.scss',
    imports: [CommonModule, NavbarComponent]
})
export class BoardsComponent {

}
