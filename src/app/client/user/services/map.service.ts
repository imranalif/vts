import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private movingDataSent = new BehaviorSubject<any>("");
  private c = new BehaviorSubject<any>("");
  private r = new BehaviorSubject<any>("");
  private devices = new BehaviorSubject<any>("");
  private deviceGroup = new BehaviorSubject<any>("");
  private history = new BehaviorSubject<any>("");

  private selectedDeviceDataSend = new BehaviorSubject<any>("");


  private start = new BehaviorSubject<any>("");
  private toggle = new BehaviorSubject<any>("");

  private indexHistory = new BehaviorSubject<any>("");
  private indexDetails = new BehaviorSubject<any>("");

 /////////////////////////////////////////

  public movingDataCatch = this.movingDataSent.asObservable();
  public remove = this.r.asObservable();
  public s = this.c.asObservable();
  public deviesMove = this.devices.asObservable();
  public deviceGroupRemove = this.deviceGroup.asObservable();

  public selectedDeviceDataCatch = this.selectedDeviceDataSend.asObservable();
  public historyData = this.history.asObservable();


  public startDevice = this.start.asObservable();
  public toggleDevice = this.toggle.asObservable();

  public indexHistoryView = this.indexHistory.asObservable();
  public indexDetailsView = this.indexDetails.asObservable();
  
  devicePosition(text) {
    console.log(text)
    this.movingDataSent.next(text);
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

  selectedDeviceDataExchange(data) {
    this.selectedDeviceDataSend.next(data);
  }

  historyShow(data) {
    this.history.next(data);
  }

  move(data) {
    this.start.next(data);
  }

  toggleMove(data) {
    this.toggle.next(data);
  }

  hideWithIndexHistory(data) {
    this.indexHistory.next(data);
  }

  showWithIndexDetails(data) {
    this.indexDetails.next(data);
  }




  constructor() { }
}
