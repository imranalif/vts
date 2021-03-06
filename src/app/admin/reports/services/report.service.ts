import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/device/';


  getPositionByPage(data): Observable<any> {
    return this.http.post(this.url + '/listPositionByPage', data);
  }

  getPositionWithDriveStop(data): Observable<any> {
    return this.http.post(this.url + '/listPositionWithDriveStop', data);
  }

  getEventWithPosition(data): Observable<any> {
    return this.http.post(this.url + '/listEventWithPosition', data);
  }

  getIngineOnOffEvent(data): Observable<any> {
    return this.http.post(this.url + '/getIngineOnOffEvent', data);
  }

  getIgnitionOnOffPosition(data): Observable<any> {
    return this.http.post(this.url + '/getIgnitionOnOffPosition', data);
  }
}
