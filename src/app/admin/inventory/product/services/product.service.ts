import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/product/';

  addProduct(data){
    return this.http.post(this.url + '/addProduct', data);
  }

  // getAllProduct(): Observable<any> {
  //   return this.http.get(this.url + '/listProduct');
  // }

  getAllProduct(data): Observable<any> {
    return this.http.post(this.url + '/listProduct', data);
  }

  getProductById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editProduct');
  }

  getProductByCategory(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getProductByCategory');
  }

  updateProduct(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateProduct', data);
  }

  deleteProduct(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteProduct');
  }
}
