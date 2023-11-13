import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-scroll',
  standalone: true,
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss',
  imports: [
    CommonModule,
    NavbarComponent,
    ScrollingModule
  ],
  providers: [
    ApiService
  ]
})
export class ScrollComponent {

  products$: Observable<Product[]>;

  constructor(
    private apiService: ApiService
  ) {
    this.products$ = this.apiService.getProducts();
  }

}
