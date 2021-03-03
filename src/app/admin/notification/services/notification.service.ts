import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/notification/';

  addNotification(data){
    return this.http.post(this.url + '/addNotification', data);
  }

  getAllNotification(): Observable<any> {
    return this.http.get(this.url + '/listNotification');
  }

  getNotificationById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editNotification');
  }

  updateNotification(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateNotification', data);
  }

  deleteNotification(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteNotification');
  }

  addNotificationWithDevice(data){
    return this.http.post(this.url + '/addDeviceNotification', data);
  }

  deleteDeviceNotification(data): Observable<object> {
    return this.http.post(this.url + '/deleteDeviceNotification',data);
  }

  getNotificationByDeviceId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getNotificationByDevice');
  }

  addNotificationWithGroup(data){
    return this.http.post(this.url + '/addGroupNotification', data);
  }

  deleteGroupNotification(data): Observable<object> {
    return this.http.post(this.url + '/deleteGroupNotification',data);
  }

  getNotificationByGroupId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getNotificationByGroup');
  }

  addNotificationWithUser(data){
    return this.http.post(this.url + '/addUserNotification', data);
  }

  deleteUserNotification(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserNotification',data);
  }

  getNotificationByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getNotificationByUser');
  }
}
