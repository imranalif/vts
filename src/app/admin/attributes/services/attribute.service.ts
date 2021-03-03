import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/attribute/';

  addAttribute(data){
    return this.http.post(this.url + '/addAttribute', data);
  }

  getAllAttribute(): Observable<any> {
    return this.http.get(this.url + '/listAttribute');
  }

  getAttributeById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editAttribute');
  }

  updateAttribute(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateAttribute', data);
  }

  deleteAttribute(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteAttribute');
  }

  addAttributeWithDevice(data){
    return this.http.post(this.url + '/addDeviceAttribute', data);
  }

  deleteDeviceAttribute(data): Observable<object> {
    return this.http.post(this.url + '/deleteDeviceAttribute',data);
  }

  getAttributeByDeviceId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getAttributeByDevice');
  }

  addAttributeWithUser(data){
    return this.http.post(this.url + '/addUserAttribute', data);
  }

  deleteUserAttribute(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserAttribute',data);
  }

  getAttributeByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getAttributeByUser');
  }
}
