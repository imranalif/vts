import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private content=new BehaviorSubject<any>("");
  public share=this.content.asObservable();
  updateData(text){
this.content.next(text);
  }

  updateLocation(data){
    console.log(data)
    this.content.next(data);
      }


  constructor() { }
}
