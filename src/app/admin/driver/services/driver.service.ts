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
}
