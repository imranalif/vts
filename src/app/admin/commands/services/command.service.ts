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

  addCommandWithDevice(data){
    return this.http.post(this.url + '/addDeviceCommand', data);
  }

  deleteDeviceCommand(data): Observable<object> {
    return this.http.post(this.url + '/deleteDeviceCommand',data);
  }

  getCommandByDeviceId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getCommandByDevice');
  }

  addCommandWithGroup(data){
    return this.http.post(this.url + '/addGroupCommand', data);
  }

  deleteGroupCommand(data): Observable<object> {
    return this.http.post(this.url + '/deleteGroupCommand',data);
  }

  getCommandByGroupId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getCommandByGroup');
  }

  addCommandWithUser(data){
    return this.http.post(this.url + '/addUserCommand', data);
  }

  deleteUserCommand(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserCommand',data);
  }

  getCommandByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getCommandByUser');
  }
}
