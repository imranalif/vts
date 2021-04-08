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

  // getAllQuery(): Observable<any> {
  //   return this.http.get(this.url + '/listQuery');
  // }

  getAllQuery(data): Observable<any> {
    return this.http.post(this.url + '/listQuery', data);
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

  addQueryProduct(data){
    return this.http.post(this.url + '/addQueryProduct', data);
  }

  addQueryMrc(data){
    return this.http.post(this.url + '/addQueryMrc', data);
  }

  addQueryFile(data){
    return this.http.post(this.url + '/addQueryFile', data);
  }

  getQueryProductById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getQueryProduct');
  }

  getQueryMrcById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getQueryMrc');
  }

  getQueryActionById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getQueryAction');
  }

  updateQueryProduct(id: string, data): Observable<object> {
    console.log(id)
    return this.http.put(this.url + id + '/updateQueryProduct', data);
  }


  updateQueryMrc(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateQueryMrc', data);
  }

  updateQueryStaus(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateQueryStatus', data);
  }

  addQueryCustomer(data){
    return this.http.post(this.url + '/addQueryCustomer', data);
  }
}
