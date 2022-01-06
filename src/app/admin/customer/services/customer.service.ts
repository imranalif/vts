import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, fromEvent} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private importDataSent = new BehaviorSubject<any>("");
  private importErrorSent = new BehaviorSubject<any>("");
  private messageSent = new BehaviorSubject<any>("");
  private deviceImportStatusSent = new BehaviorSubject<any>("");


  public importDataCatch = this.importDataSent.asObservable();
  public messageCatch = this.importDataSent.asObservable();
  public importErrorCatch = this.importErrorSent.asObservable();
  public deviceImportStatusCatch = this.deviceImportStatusSent.asObservable();


  importDataExchange(text) {
    console.log(text)
    this.importDataSent.next(text);
  }

  importErrorExchange(text) {
    this.importErrorSent.next(text);
  }

  messageExchange(text) {
    this.messageSent.next(text);
  }

  deviceImportStatusExchange(text) {
    console.log(text)
    this.deviceImportStatusSent.next(text);
  }

  DestroySubject(){
    alert('hi');
  }

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl + '/customer/';

  addCustomer(data): Observable<any> {
    return this.http.post(this.url + '/addCustomer',data);
  }

  getAllCustomer(data): Observable<any> {
    return this.http.post(this.url + '/listCustomer',data);
  }
  getCustomerById(id: string): Observable<object> {
    return this.http.get(this.url + id + '/editCustomer');
  }

  getCustomerByUserId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getCustomerByUserId');
  }

  updateCustomer(id: string, data): Observable<object> {
    return this.http.put(this.url + id + '/updateCustomer', data);
  }
  getAllCustomerList(): Observable<any> {
    return this.http.get(this.url + '/allCustomerList');
  }

  getAllCustomerListJoinWithDevices(): Observable<any> {
    return this.http.get(this.url + '/allCustomerListJoinWithDevices');
  }

  customerSearch(data){
    return this.http.post(this.url + '/customerSearch', data);
  }

  resellerSearch(data){
    return this.http.post(this.url + '/resellerSearch', data);
  }

  DeviceByCustomer(id: string):Observable<any[]>{
    return this.http.get<any[]>(this.url + id + '/getDeviceByCustomer');
  }

  DeviceByDeviceId(data):Observable<any[]>{
    return this.http.post<any[]>(this.url  + '/getDeviceByDeviceId',data);
  }

  DeviceIdByUser(id: string):Observable<any[]>{
    return this.http.get<any[]>(this.url + id + '/getDeviceIdByUser');
  }

  DeviceByCustomerWithPosition(id: string):Observable<any[]>{
    return this.http.get<any[]>(this.url + id + '/getDeviceByCustomerWithPosition');
  }

  DeviceByCustomerUserWithPosition(data):Observable<any[]>{
    return this.http.post<any[]>(this.url  + '/getDeviceByCustomerUserWithPosition',data);
  }

  DevicePositionByPositionId(data):Observable<any[]>{
    return this.http.post<any[]>(this.url  + '/getDevicePositionByPositionId',data);
  }

  DevicePositionByCustomer(id: string):Observable<any[]>{
    return this.http.get<any[]>(this.url + id + '/getDevicePositionByCustomer');
  }

  getCustomerByReseller(id: string):Observable<any[]>{
    return this.http.get<any[]>(this.url + id + '/getCustomerByReseller');
  }

  addCustomerWithReseller(data): Observable<any> {
    return this.http.post(this.url + '/addCustomerWithReseller',data);
  }

  // addDeviceWithReseller(data): Observable<any> {
  //   return this.http.post(this.url + '/addDeviceWithReseller',data);
  // }


  getResellerAutoId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getResellerAutoId');
  }
  getCustomerByResellerId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getCustomerByResellerId');
  }

  getCustomerIdByAutoId(id: string): Observable<object> {
    return this.http.get(this.url + id + '/getCustomerIdByAutoId');
  }
}
