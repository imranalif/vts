import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/category/';

  addCategory(data){
    return this.http.post(this.url + '/addCategory', data);
  }

  getAllCategory(): Observable<any> {
    return this.http.get(this.url + '/listCategory');
  }

  getCategoryById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editCategory');
  }

  updateCategory(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateCategory', data);
  }

  deleteCategory(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteCategory');
  }
}
