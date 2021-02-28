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
}
