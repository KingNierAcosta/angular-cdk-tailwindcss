import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ApiService } from '../../services/api.service';
import { Observable, debounceTime, takeUntil } from 'rxjs';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { DestroyComponent } from '../../components/destroy/destroy.component';
import { BtnComponent } from "../../components/btn/btn.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [
    ApiService
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    NavbarComponent,
    BtnComponent,
    ReactiveFormsModule
  ]
})
export class TableComponent extends DestroyComponent implements OnInit {

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(
    private apiService: ApiService
  ) {
    super();
  }


  ngOnInit(): void {
    this.apiService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      })

    this.input.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this.destroy$)
      )
      .subscribe(input => this.dataSource.find(input));
  }

  update(row: Product) {
    this.dataSource.update(row.id, { price: 20 })
  }

}
