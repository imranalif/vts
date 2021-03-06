import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Observable, fromEvent} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/device/';

  private importDataSent = new BehaviorSubject<any>("");
  public importDataCatch = this.importDataSent.asObservable();

  private importErrorSent = new BehaviorSubject<any>("");
  public importErrorCatch = this.importErrorSent.asObservable();


  importDataExchange(text) {
    console.log(text)
    this.importDataSent.next(text);
  }

  importErrorExchange(text) {
    this.importErrorSent.next(text);
  }

  getAllDevices(): Observable<any> {
    return this.http.get(this.url + '/listDevices');
  }

  getAllDevicesByPage(data): Observable<any> {
    return this.http.post(this.url + '/listDevicesByPage', data);
  }

  addDevice(data): Observable<any>{
    return this.http.post(this.url + '/addDevice', data);
  }

  getAllFreeDevice(): Observable<any> {
    return this.http.get(this.url + '/listFreeDevice');
  }

  

  getDeviceById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editDevice');
  }

  updateDevice(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateDevice', data);
  }

  deleteDevice(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteDevice');
  }

  addDeviceWithUser(data){
    return this.http.post(this.url + '/addUserDevice', data);
  }

  deleteUserDevice(data): Observable<object> {
    return this.http.post(this.url + '/deleteUserDevice',data);
  }

  getDeviceByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByUser');
  }

  getDeviceByAllUser(): Observable<object> {
    return this.http.get(this.url +  '/getDeviceByAllUser');
  }

  addDeviceWithCustomer(data): Observable<object>{
    return this.http.post(this.url + '/addCustomerDevice', data);
  }

  addDeviceWithCustomerByImport(data): Observable<any>{
    return this.http.post(this.url + '/addDeviceWithCustomerByImport', data);
  }

  deleteCustomerDevice(data): Observable<object> {
    return this.http.post(this.url + '/deleteCustomerDevice',data);
  }

  addDeviceWithCustomerReseller(data){
    return this.http.post(this.url + '/addCustomerResellerDevice', data);
  }

  deleteCustomerDeviceReseller(data): Observable<object> {
    return this.http.post(this.url + '/deleteCustomerResellerDevice',data);
  }

  getDeviceByCustomerResellerId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByCustomerResellerId');
  }

  getDeviceByResellerId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByResellerId');
  }
  getDeviceByResellerIdFor(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByResellerIdFor');
  }


  getDeviceByCustomerId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceByCustomerId');
  }

  getAllPostion(): Observable<any> {
    return this.http.get(this.url + '/listPositions');
  }

  getHistoryPostionBySearch(data): Observable<any> {
    return this.http.post(this.url + '/listHistoryPositions',data);
  }

  getAllPostionBySearch(data): Observable<any> {
    return this.http.post(this.url + '/listAllPositions',data);
  }

  getAllEvents(): Observable<any> {
    return this.http.get(this.url + '/listEvents');
  }

  getAllEventsByReseller(data): Observable<any> {
    return this.http.post(this.url + '/listEventsByReseller',data);
  }


  getDeviceWithPositionById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceWithPositionById');
  }

  getDeviceCurrentPositionById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getDeviceCurrentPositionById');
  }

  getMovingPosition(data): Observable<any> {
    return this.http.post(this.url + '/movingPositions',data);
  }

  getDevicePositionByPositionId(data): Observable<any> {
    return this.http.post(this.url + '/getDevicePositionByPositionId',data);
  }



  getEventPositionById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getEventPositionById');
  }

  getDeviceIdByIMEI(id: string): Observable<any> {
    return this.http.get(this.url + id + '/getDeviceIdByIMEI');
  }

  addDeviceWithReseller(data): Observable<any> {
    return this.http.post(this.url + '/addDeviceWithReseller',data);
  }

  deleteDeviceFromReseller(data): Observable<any> {
    return this.http.post(this.url + '/deleteDeviceFromReseller',data);
  }


  /////////////////  Device Category   /////////////

  getAllDeviceCategory(): Observable<any> {
    return this.http.get(this.url + '/listDeviceCategory');
  }


  addDeviceCategory(data): Observable<any>{
    return this.http.post(this.url + '/addDeviceCategory', data);
  }


  getDeviceCategoryById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editDeviceCategory');
  }

  updateDeviceCategory(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateDeviceCategory', data);
  }

  deleteDeviceCategory(id: string): Observable<object> {
    return this.http.delete(this.url + id + '/deleteDeviceCategory');
  }

  getAllPois(): Observable<any> {
    return this.http.get(this.url + '/listPois');
  }

  addPois(data): Observable<any>{
    return this.http.post(this.url + '/addPois', data);
  }

}
