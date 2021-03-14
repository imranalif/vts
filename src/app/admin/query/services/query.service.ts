import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/query/';

  addQuery(data){
    return this.http.post(this.url + '/addQuery', data);
  }

  getAllQuery(): Observable<any> {
    return this.http.get(this.url + '/listQuery');
  }

  getQueryById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editQuery');
  }

  updateQuery(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateQuery', data);
  }

  deleteQuery(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteQuery');
  }

  addQueryAction(data){
    return this.http.post(this.url + '/addQueryAction', data);
  }
}
