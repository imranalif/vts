import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/role/';

  addRole(data){
    return this.http.post(this.url + '/addRole', data);
  }

  getAllRole(): Observable<any> {
    return this.http.get(this.url + '/listRole');
  }

  getRoleById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editRole');
  }

  updateRole(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateRole', data);
  }

  deleteRole(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteRole');
  }
  getPermissionId(id: number): Observable<any> {
    return this.http.get<any>(this.url + id + '/editPermission');
  }
  addPermission( data): Observable<object> {
    return this.http.post(this.url +  '/addPermission', data);
  }

  // deletePermission(permission): Observable<object> {
  //   return this.http.delete(this.url + permission + '/deletePermission');
  // }

  deletePermission(permission): Observable<object> {
    return this.http.post(this.url + '/deletePermission',permission);
  }

  getPermissionByGroup(id: number): Observable<any> {
    return this.http.get<any>(this.url + id + '/permissionByGroup');
  }

  getPermissionByRole(id: number): Observable<any> {
    return this.http.get<any>(this.url + id + '/permissionByRole');
  }

  
}
