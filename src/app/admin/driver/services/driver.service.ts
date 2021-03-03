import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/driver/';

  addDriver(data){
    return this.http.post(this.url + '/addDriver', data);
  }

  getAllDriver(): Observable<any> {
    return this.http.get(this.url + '/listDriver');
  }

  getDriverById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editDriver');
  }

  updateDriver(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateDriver', data);
  }

  deleteDriver(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteDriver');
  }
  addDriverWithDevice(data){
    return this.http.post(this.url + '/addDeviceDriver', data);
  }

  deleteDeviceDriver(data): Observable<object> {
    return this.http.post(this.url + '/deleteDeviceDriver',data);
  }

  getDriverByDeviceId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDriverByDevice');
  }

  addDriverWithGroup(data){
    return this.http.post(this.url + '/addGroupDriver', data);
  }

  deleteGroupDriver(data): Observable<object> {
    return this.http.post(this.url + '/deleteGroupDriver',data);
  }

  getDriverByGroupId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDriverByGroup');
  }

  addDriverWithUser(data){
    return this.http.post(this.url + '/addUserDriver', data);
  }

  deleteUserDriver(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserDriver',data);
  }

  getDriverByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDriverByUser');
  }

}
