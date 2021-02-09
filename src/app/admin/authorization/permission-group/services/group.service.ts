import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

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
}
