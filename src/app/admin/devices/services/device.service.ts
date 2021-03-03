import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/device/';

  addDevice(data){
    return this.http.post(this.url + '/addDevice', data);
  }

  getAllDevice(): Observable<any> {
    return this.http.get(this.url + '/listDevice');
  }

  getDeviceById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editDevice');
  }

  updateDevice(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateDevice', data);
  }

  deleteDevice(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteDevice');
  }

  addDeviceWithUser(data){
    return this.http.post(this.url + '/addUserDevice', data);
  }

  deleteUserDevice(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserDevice',data);
  }

  getDeviceByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByUser');
  }
}
