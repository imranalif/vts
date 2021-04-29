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

  getAllCustomer(): Observable<any> {
    return this.http.get(this.url + '/listCustomer');
  }
}
