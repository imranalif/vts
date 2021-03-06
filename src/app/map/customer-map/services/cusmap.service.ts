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
  private addressDataSent = new BehaviorSubject<any>("");
  private eventSent = new BehaviorSubject<any>("");
  private logoutEventSent = new BehaviorSubject<any>("");
  private trafficSent = new BehaviorSubject<any>("");
  private poiSent = new BehaviorSubject<any>("");
  private poiRemoveSent = new BehaviorSubject<any>("");
  private poiTabDataSent= new BehaviorSubject<any>("");
  private poiDrawSent= new BehaviorSubject<any>("");
  private poiLatLngSent= new BehaviorSubject<any>("");
  private geofenceSent= new BehaviorSubject<any>("");
  private geofenceRemoveSent= new BehaviorSubject<any>("");
  private geoTabDataSent= new BehaviorSubject<any>("");


  public deviceDataCatch = this.deviceDataSent.asObservable();
  public deviceRemoveFromMap = this.deviceRemoveRequest.asObservable();
  public deviceDetailsCatch = this.deviceDetailsSent.asObservable();
  public deviceLocationCatch = this.deviceLocationSent.asObservable();
  public deviceHistoryCatch = this.deviceHistorySent.asObservable();
  public tabIndexCatch = this.tabIndexSent.asObservable();
  public deviceMoveCatch = this.deviceMoveSent.asObservable();
  public deviceToggleCatch = this.deviceToggleSent.asObservable();
  public motionConCatch = this.motionConSent.asObservable();
  public motionStoponCatch = this.motionStoponSent.asObservable();
  public detailsDataCatch = this.detailsDataSent.asObservable();
  public addressDataCatch = this.addressDataSent.asObservable();
  public eventCatch = this.eventSent.asObservable();
  public logoutEventCatch = this.logoutEventSent.asObservable();
  public trafficCatch = this.trafficSent.asObservable();
  public poiCatch = this.poiSent.asObservable();
  public poiRemoveCatch = this.poiRemoveSent.asObservable();
  public poiTabDataCatch = this.poiTabDataSent.asObservable();
  public poiDrawCatch = this.poiDrawSent.asObservable();
  public poiLatLngCatch = this.poiLatLngSent.asObservable();
  public geofenceCatch = this.geofenceSent.asObservable();
  public geofenceRemoveCatch = this.geofenceRemoveSent.asObservable();
  public geoTabDataCatch = this.geoTabDataSent.asObservable();


  deviceDataExchange(text) {
    this.deviceDataSent.next(text);
  }

  deviceRemove(text) {
    this.deviceRemoveRequest.next(text);
  }

  deviceDetails(text) {
    this.deviceDetailsSent.next(text);
  }

  deviceLocation(text) {
    console.log(text)
    this.deviceLocationSent.next(text);
  }

  deviceHistory(text) {
    this.deviceHistorySent.next(text);
  }

  tabIndex(text) {
    this.tabIndexSent.next(text);
  }

  deviceMove(text) {
    this.deviceMoveSent.next(text);
  }

  deviceToggle(text) {
    this.deviceToggleSent.next(text);
  }


  motionControl(text) {
    this.motionConSent.next(text);
  }

  motionStop(text) {
    this.motionStoponSent.next(text);
  }

  detailsDataExchange(text) {
    console.log(text)
    this.detailsDataSent.next(text);
  }

  addressDataExchange(text) {
    this.addressDataSent.next(text);
  }

  eventExchange(text) {
    this.eventSent.next(text);
  }

  logoutEventExchange(text) {
    this.logoutEventSent.next(text);
  }

  trafficExchange(text) {
    this.trafficSent.next(text);
  }

  poiExchange(text) {
    this.poiSent.next(text);
  }

  poiRemoveExchange(text) {
    this.poiRemoveSent.next(text);
  }
  poiTabExchange(text) {
    this.poiTabDataSent.next(text);
  }
  poiDrawExchange(text) {
    this.poiDrawSent.next(text);
  }
  poiLatLngExchange(text) {
    this.poiLatLngSent.next(text);
  }
  geofenceExchange(geofenceData) {
    this.geofenceSent.next(geofenceData);
  }
  geofenceRemoveExchange(geofenceRemove) {
    this.geofenceRemoveSent.next(geofenceRemove);
  }
  geoTabDataExchange(text) {
    this.geoTabDataSent.next(text);
  }
}
