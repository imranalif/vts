import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.apiUrl + '/user/';
    constructor(private http: HttpClient) { }
    login(data): Observable<any>{
      return this.http.post<any>(this.url + '/login', data);
    }
  
    // tslint:disable-next-line: typedef
    loggedIn() {
      return !!localStorage.getItem('token');
    }
}
