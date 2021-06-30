import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private content = new BehaviorSubject<any>("");
  private c = new BehaviorSubject<any>("");
  private r = new BehaviorSubject<any>("");
  private devices = new BehaviorSubject<any>("");
  private deviceGroup = new BehaviorSubject<any>("");
 
  public share = this.content.asObservable();
  public remove = this.r.asObservable();
  public s = this.c.asObservable();
  public deviesMove = this.devices.asObservable();
  public deviceGroupRemove = this.deviceGroup.asObservable();
  
  updateData(text) {
    this.content.next(text);
  }


  updateLocation(data) {
    console.log(data)
    this.c.next(data);
  }

  removeData(data) {
    this.r.next(data);
  }

  DeviceMoveUpdate(data) {
    this.devices.next(data);
  }
  DeviceGroupDelete(data) {
    this.deviceGroup.next(data);
  }



  constructor() { }
}
