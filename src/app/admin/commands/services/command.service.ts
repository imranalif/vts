import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/command/';

  addCommand(data){
    return this.http.post(this.url + '/addCommand', data);
  }

  getAllCommand(): Observable<any> {
    return this.http.get(this.url + '/listCommand');
  }

  getCommandById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editCommand');
  }

  updateCommand(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateCommand', data);
  }

  deleteCommand(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteCommand');
  }
}
