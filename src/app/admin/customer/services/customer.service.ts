import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/customer/';

  getAllCustomer(data): Observable<any> {
    return this.http.post(this.url + '/listCustomer',data);
  }
  getCustomerById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editCustomer');
  }

  updateCustomer(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateCustomer', data);
  }
  getAllCustomerList(): Observable<any> {
    return this.http.get(this.url + '/allCustomerList');
  }

  customerSearch(data){
    return this.http.post(this.url + '/customerSearch', data);
  }
}
