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

  getAllDevices(): Observable<any> {
    return this.http.get(this.url + '/listDevices');
  }


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

  getDeviceByAllUser(): Observable<object> {
    return this.http.get(this.url +  '/getDeviceByAllUser');
  }

  addDeviceWithCustomer(data){
    return this.http.post(this.url + '/addCustomerDevice', data);
  }

  deleteCustomerDevice(data): Observable<object> {
    return this.http.post(this.url + '/deleteCustomerDevice',data);
  }

  getDeviceByCustomerId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByCustomerId');
  }

  getAllPostion(): Observable<any> {
    return this.http.get(this.url + '/listPositions');
  }

  getHistoryPostionBySearch(data): Observable<any> {
    return this.http.post(this.url + '/listHistoryPositions',data);
  }

  getAllPostionBySearch(data): Observable<any> {
    return this.http.post(this.url + '/listAllPositions',data);
  }

  getAllEvents(): Observable<any> {
    return this.http.get(this.url + '/listEvents');
  }

  getDeviceWithPositionById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceWithPositionById');
  }

  getDeviceCurrentPositionById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceCurrentPositionById');
  }

  getMovingPosition(data): Observable<any> {
    return this.http.post(this.url + '/movingPositions',data);
  }
}
