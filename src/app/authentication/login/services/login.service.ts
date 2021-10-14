import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private customer = new BehaviorSubject<any>("");

  public customerPermission = this.customer.asObservable();

  customerData(text) {
    console.log(text)
    this.customer.next(text);
  }

  private url = environment.apiUrl + '/user/';
    constructor(private http: HttpClient) { }
    login(data): Observable<any>{
      return this.http.post<any>(this.url + '/login', data);
    }

    logout(): Observable<any>{
      return this.http.post<any>(this.url + '/logout', {'refreshToken':this.getRefreshToken()});
    }
  
    // tslint:disable-next-line: typedef
    loggedIn() {
      return !!sessionStorage.getItem('accessToken');
    }

    getToken(){
      return sessionStorage.getItem('accessToken')
    }

    refreshToken(){
      return this.http.post<any>(this.url + '/renewAccessToken', {'refreshToken':this.getRefreshToken()}).pipe(tap((tokens)=>{
        this.storeAccessToken(tokens.accessToken);
      }))
    }

    getRefreshToken(){
      return sessionStorage.getItem('refreshToken')
    }

    private storeAccessToken(jwt: string) {
      sessionStorage.setItem('accessToken', jwt);
    }
}
