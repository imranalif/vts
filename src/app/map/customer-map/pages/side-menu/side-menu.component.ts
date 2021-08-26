import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { CusmapService } from '../../services/cusmap.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  myform: FormGroup;
  Id
  customer
  customerDevices
  filterDevices
  DeviceItem=[]
  devicelog=[]
  devicelogMatch=[]
  historyData;
  Events
  dataSource = new MatTableDataSource<any>([]);
  dataEvents = new MatTableDataSource<any>([]);
  //displayedColumns = ['select',  'name', 'more'];
  displayedColumns2 = ['time', 'device_id', 'event', 'more'];
  selected=1;
  isLoading
  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private customerService:CustomerService,
    private deviceService:DeviceService,
    private cusmapService:CusmapService
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      id: [ ],
      from_date: [''],
      to_date: [''],
      status: [''],
       customer_id:[''],
      d:['']
    });

    
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.getCustomerDevices(this.Id);
    });

    this.getAllEvents()
  }

  getCustomerDevices(id){
    this.customerService.getCustomerById(id).subscribe(data=>{
this.customer=data;
console.log(data);
    })
    this.customerService.DeviceByCustomerWithPosition(id).subscribe(res=>{
this.customerDevices=res;
console.log(this.customerDevices)
res.forEach((element, i) => {
this.devicelog.push(element.deviceid)
})
this.dataSource = new MatTableDataSource( res as any);
      console.log(this.devicelog);
    })
  }

  objectTab(tabChangeEvent: MatTabChangeEvent){
    console.log('index => ', tabChangeEvent.index); 
    var inx=tabChangeEvent.index;
    if(inx==2){
      var  indexData={id:2}
      //this.cusmapService.tabIndex(indexData);
      setTimeout(()=>{    
      const today=new Date
      var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
    
      this.myform.patchValue(
        {
       //id:3,
        from_date: requiredDate,
        to_date:new Date()
      })
    }, 100);
      }
    
      if(inx==0 || inx==1){
        var  indexD={id:1}
        this.cusmapService.tabIndex(indexD);
        }
  
  }

  applyFilter(filterValue: string): void {
    
  }
  applyDevices(val): void {
    this.customerDevices = this.filterDevices.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

  check(e, data) {
    if (e) {
      console.log(data)
      //this.DeviceItem.push(1);
       this.devicelogMatch.push(data.deviceid)
      var  a = this.devicelog.toString();
     var b = this.devicelogMatch.toString();
     if(a===b){
      this.DeviceItem.push(1);
     }
       this.cusmapService.deviceDataExchange([data]);
    }
    else{
      // this.deleteObject.push(data)
      this.devicelogMatch = this.devicelogMatch.filter(item => item !== data.deviceid)
      this.DeviceItem= this.DeviceItem.filter(item => item !== 1)
       this.cusmapService.deviceRemove([data]);
    }
  
  }

  checkByCustomer(e){
    if (e) {
      this.customerDevices.forEach((element, i) => {
        this.DeviceItem.push(element.uniqueid);
      })
      // this.singleObject.push(data)
       this.cusmapService.deviceDataExchange(this.customerDevices);
    }
    else{
      this.DeviceItem=[]
     
      // this.deleteObject.push(data)
       this.cusmapService.deviceRemove(this.customerDevices);
    }
  }

  checkState(data){
    if (this.customerDevices) {
      return this.DeviceItem.indexOf(data) > -1;
    }
  }

  checkStateC(data){
    if (this.customerDevices) {
      return this.DeviceItem.indexOf(data) > -1;
    }
  }

  getAllEvents(){
    this.deviceService.getAllEvents().subscribe(res => {
  this.Events=res;
  this.dataEvents = new MatTableDataSource( res as any);
     })
  
  }

  loadHistory(){
    this.isLoading = true;
    const obj={from_date:this.myform.value.from_date,to_date:this.myform.value.to_date}
     console.log(this.myform.value);
     this.deviceService.getHistoryPostionBySearch(obj).subscribe(res=>{
       console.log(res)
       this.historyData=res;
       this.isLoading = false;
       this.cusmapService.deviceHistory(res);
     })
   
   }

   getLocation(e){
      var lat=e.latitude;
      var lng=e.longitude;
      var data={lat:lat,lng:lng}
      this.cusmapService.deviceLocation(e);
      //this.cusmapService.deviceDetails(e)
    }
 

}
