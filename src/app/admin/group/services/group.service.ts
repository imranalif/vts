import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/group/';

  addGroup(data){
    return this.http.post(this.url + '/addGroup', data);
  }

  getAllGroup(): Observable<any> {
    return this.http.get(this.url + '/listGroup');
  }

  getGroupById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editGroup');
  }

  updateGroup(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateGroup', data);
  }

  deleteGroup(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteGroup');
  }

  addGroupWithUser(data){
    return this.http.post(this.url + '/addUserGroup', data);
  }

  deleteUserGroup(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserGroup',data);
  }

  getGroupByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getGroupByUser');
  }
}
