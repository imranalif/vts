import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/permission_group/';

  addGroup(data){
    return this.http.post(this.url + '/addPermissionGroup', data);
  }

  getAllGroup(): Observable<any> {
    return this.http.get(this.url + '/listPermissionGroup');
  }

  getGroupById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editPermissionGroup');
  }

  updateGroup(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updatePermissionGroup', data);
  }

  deleteGroup(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deletePermissionGroup');
  }
}
