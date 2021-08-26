import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CusmapService {

  constructor() { }
  private deviceDataSent = new BehaviorSubject<any>("");
  private deviceRemoveRequest = new BehaviorSubject<any>("");
  private deviceDetailsSent = new BehaviorSubject<any>("");
  private deviceLocationSent = new BehaviorSubject<any>("");
  private deviceHistorySent = new BehaviorSubject<any>("");
  private tabIndexSent = new BehaviorSubject<any>("");
  private deviceMoveSent = new BehaviorSubject<any>("");
  private deviceToggleSent = new BehaviorSubject<any>("");
  private motionConSent = new BehaviorSubject<any>("");
  private motionStoponSent = new BehaviorSubject<any>("");
  private detailsDataSent = new BehaviorSubject<any>("");

  public deviceDataCatch = this.deviceDataSent.asObservable();
  public deviceRemoveFromMap = this.deviceRemoveRequest.asObservable();
  public deviceDetailsCatch = this.deviceDetailsSent.asObservable();
  public deviceLocationCatch = this.deviceLocationSent.asObservable();
  public deviceHistoryCatch = this.deviceHistorySent.asObservable();
  public tabIndexCatch = this.tabIndexSent.asObservable();
  public deviceMoveCatch = this.deviceMoveSent.asObservable();
  public deviceToggleCatch = this.deviceToggleSent.asObservable();
  public motionConCatch = this.deviceToggleSent.asObservable();
  public motionStoponCatch = this.motionStoponSent.asObservable();
  public detailsDataCatch = this.detailsDataSent.asObservable();


  deviceDataExchange(text) {
    console.log(text)
    this.deviceDataSent.next(text);
  }

  deviceRemove(text) {
    console.log(text)
    this.deviceRemoveRequest.next(text);
  }

  deviceDetails(text) {
    console.log(text)
    this.deviceDetailsSent.next(text);
  }

  deviceLocation(text) {
    console.log(text)
    this.deviceLocationSent.next(text);
  }

  deviceHistory(text) {
    console.log(text)
    this.deviceHistorySent.next(text);
  }

  tabIndex(text) {
    this.tabIndexSent.next(text);
  }

  deviceMove(text) {
    console.log(text)
    this.deviceMoveSent.next(text);
  }

  deviceToggle(text) {
    console.log(text)
    this.deviceToggleSent.next(text);
  }


  motionControl(text) {
    console.log(text)
    this.motionConSent.next(text);
  }

  motionStop(text) {
    this.motionStoponSent.next(text);
  }

  detailsDataExchange(text) {
    this.detailsDataSent.next(text);
  }
}
