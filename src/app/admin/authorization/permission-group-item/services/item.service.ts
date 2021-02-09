import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/item/';

  addItem(data){
    return this.http.post(this.url + '/addItem', data);
  }

  getAllItem(): Observable<any> {
    return this.http.get(this.url + '/listItem');
  }

  getItemById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editItem');
  }

  updateItem(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateItem', data);
  }

  deleteItem(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteItem');
  }

  getPermissionItemById(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + id + '/permissionItem');
  }

  checkUniquePermission(name: string): Observable<any[]>{
    return this.http.get<any[]>(this.url + name + '/checkUniquePermission');
  }
}
