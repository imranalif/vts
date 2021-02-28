import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/maintenance/';

  addMaintenance(data){
    return this.http.post(this.url + '/addMaintenance', data);
  }

  getAllMaintenance(): Observable<any> {
    return this.http.get(this.url + '/listMaintenance');
  }

  getMaintenanceById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editMaintenance');
  }

  updateMaintenance(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateMaintenance', data);
  }

  deleteMaintenance(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteMaintenance');
  }
}
