import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/user/';

  addUser(data){
    return this.http.post(this.url + '/addUser', data);
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.url + '/listUser');
  }

  getAllUserByPage(data): Observable<any> {
    return this.http.post(this.url + '/listUserByPage',data);
  }

  getUserById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editUser');
  }

  updateUser(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateUser', data);
  }

  deleteUser(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteUser');
  }

  resetPassword(data): Observable<object> {
    return this.http.post(this.url + '/resetPassword', data);
  }

  changePassword(data): Observable<object> {
    return this.http.post(this.url + '/changePassword', data);
  }

}
