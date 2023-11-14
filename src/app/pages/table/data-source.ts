import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  override connect(collectionViewer: CollectionViewer): Observable<readonly Product[]> {
    return this.data;
  }

  override disconnect(collectionViewer: CollectionViewer): void {
    throw new Error('Method not implemented.');
  }

  init(products: Product[]) {
    this.data.next(products);
    this.originalData = products;
  }

  getTotal() {
    return this.data.getValue()
      .map(it => it.price)
      .reduce((a, b) => a + b, 0)
  }

  update(id: number, changes: Partial<Product>) {
    const products = this.data.getValue();
    const index = products.findIndex(it => it.id === id);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        ...changes
      }
      this.data.next(products);
    }
  }

  find(query: string) {
    const newProducts = this.originalData.filter(it => it.title.toLowerCase().includes(query.toLowerCase()));
    this.data.next(newProducts);
  }

}
