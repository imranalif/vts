import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, fromEvent} from 'rxjs';
import { IGeofence } from '../interfaces/geofence.interface';

@Injectable({
  providedIn: 'root'
})
export class GeofenceService {

  constructor(private http: HttpClient) { }

  private url :string = environment.apiUrl + '/geofence/';

  private geofenceDataSent = new BehaviorSubject<any>("");
  private geofenceEditDataSent = new BehaviorSubject<any>("");

  public geofenceDataCatch = this.geofenceDataSent.asObservable();
  public geofenceEditDataCatch = this.geofenceEditDataSent.asObservable();

  public geofenceDataExchange(text): void {
    this.geofenceDataSent.next(text);
  }

  public geofenceEditDataExchange(text): void {
    this.geofenceEditDataSent.next(text);
  }

  addGeofence(data){
    return this.http.post(this.url + '/addGeofence', data);
  }

  getAllGeofence(): Observable<IGeofence[]> {
    return this.http.get<IGeofence[]>(this.url + '/listGeofence');
  }

  getGeofenceById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editGeofence');
  }

  updateGeofence(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateGeofence', data);
  }

  deleteGeofence(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteGeofence');
  }
}
