import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { MapService } from '../../services/map.service';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { LoginService } from 'src/app/authentication/login/services/login.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  reCheck:boolean=false;
  singleObject=[]
  deleteObject=[]
  groupDevice=[]
  box:boolean=true
  DeviceItem=[]
  DeviceView=[]
  DeviceRemove=[]
  reserve=[]
  isOpen = false;
  customers
  Events
  customerData=[]
  permission: any[] = [];
  allDevices: any[] = [];
devices
devicesIndex=[]
filterDevices
myform: FormGroup;
myform2: FormGroup;
dataSource = new MatTableDataSource<any>([]);
displayedColumns = ['time', 'device_id', 'event', 'more'];
status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private mapService:MapService,
    private customerService:CustomerService,
    private loginService:LoginService
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
    // this.myform2 = this.fb.group({
    //   //customer_id:[''],

    // });
    var b={
      Cause: '16',
        'Cause-txt': 'Normal Clearing',
        '$time': 1626072648105
      }
      console.log(b['$time'])
      console.log(b['Cause-txt'])
    this.getAllCustomer();
    this.getAllDevice();
    this.getAllEvents();
    // this.myform.value.d=3;
    // this.myform.patchValue({d: 7})
    // this.myform.get('d').setValue(4);
    this.loginService.customerPermission.subscribe(res => {
      if (res) {
        console.log(res)
        this.customers = [res];
        console.log(res.customer_id)
        this.customerService.DeviceByCustomerWithPosition(res.customer_id).subscribe(data => {
          console.log(data)
          if(data){
          this.permission[res.customer_id] = data;
          console.log(this.permission[res.customer_id])
          
            data.forEach(element => {
              this.allDevices.push(element.deviceid);
              console.log(this.allDevices)
            });
          }
         
        })
      }
    })
  }


  getAllCustomer(): void {
    this.customerService.getAllCustomerList().subscribe(res => {
      this.customers = res;
      console.log(this.customers)
      this.customerData.push(res);
      this.customers.forEach(element => {
        this.customerService.DeviceByCustomer(element.customer_id).subscribe(data => {
          console.log(data)
          if(data){
          this.permission[element.customer_id] = data;
          console.log(this.permission)
          
            data.forEach(element => {
              this.allDevices.push(element.deviceid);
              console.log(this.allDevices)
            });
          }
         
        })
      });
    });
  }

getAllDevice(){
 
  this.deviceService.getAllDevices().subscribe(res => {
    console.log(res)
    this.devices = res;

    this.devices.forEach((element, i) => {
      //this.DeviceItem.push(element.id);
      // this.groupItemCompare.push(element.permission);
      // this.permissionGroup.push(element.group_id);
    });

    this.devices.forEach((elem, i) => {
      this.devicesIndex[elem.id] = this.devices[i];
     
    }
    );
    //console.log(this.devicesIndex)

    //this.dataSource = new MatTableDataSource( res as any);
  })
}

getAllEvents(){
  this.deviceService.getAllEvents().subscribe(res => {
this.Events=res;
console.log(res)
this.dataSource = new MatTableDataSource( res as any);
   })

}



public checkState(data: string): boolean {
  if (this.devices) {
    return this.DeviceItem.indexOf(data) > -1;
  }
  
}


check(e, data) {
  if (e) {
    console.log(data)
    this.singleObject.push(data)
    this.mapService.updateData([data]);
  
    //this.mapService.DeviceMoveUpdate(this.singleObject);
  }
  else{
    this.deleteObject.push(data)
    //this.mapService.updateData(this.deleteObject);
    //this.mapService.updateData(data.unique_id);
    this.mapService.removeData([data]);
  }

}

applyFilter(filterValue: string): void {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
applyDevices(val): void {
  this.devices = this.filterDevices.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
}

getLocation(e){
  
console.log(e)
  var lat=e.latitude;
  var lng=e.longitude;
  var data={lat:lat,lng:lng}
  this.mapService.updateLocation(data);
  this.mapService.passDeviceData(e)
}

objectTab(tabChangeEvent: MatTabChangeEvent){
  console.log('index => ', tabChangeEvent.index); 
  var inx=tabChangeEvent.index;
  if(inx==2){
  var  indexData={id:2}
  this.mapService.hideWithIndexHistory(indexData);
  }

  if(inx==0 || inx==1){
    var  indexD={id:1}
    this.mapService.showWithIndexDetails(indexD);
    }

const today=new Date
  var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())

  this.myform.patchValue({
    id:3,
    from_date: requiredDate,
    to_date:new Date()
  })
  console.log("1234");
}

checkAllByGroup(e: any, id){
console.log(id)
  if(e){
  this.customerService.DeviceByCustomer(id).subscribe(data => {
    //this.mapService.DeviceMoveUpdate(data);
    data.forEach((element, i) => {
      this.groupDevice.push(element)
      var v=this.devices.find(x => x.id === element.deviceid);
      console.log(v)
      this.mapService.updateData([v]);
      //console.log(this.DeviceView)
       this.DeviceItem.push(v.id);
       this.DeviceView.push(v);
       
      this.reserve.push({customer_id:element.customer_id,deviceid:element.deviceid,name:v.name});
      // this.groupItemCompare.push(element.permission);
      // this.permissionGroup.push(element.group_id);
    });
    //this.mapService.updateData(this.DeviceView);
    //console.log(this.DeviceView)
  })
}
else{
  console.log(this.reserve)
  this.reserve.forEach((element,i) => {
    //var n = this.reserve.find(m => m.customer_id=== id);
    if(element.customer_id==id)
    {
      this.DeviceItem = this.DeviceItem.filter(m => m !== element.deviceid);
      //this.DeviceRemove.push(element);
      this.mapService.removeData([element])
    }
    //console.log(n)
   //this.DeviceRemove.push(n);
  });
  //this.mapService.removeData(this.DeviceRemove);
  console.log(this.DeviceRemove)
  // this.DeviceRemove.forEach(e=>{
  //   this.DeviceItem = this.DeviceItem.filter(m => m !== e.device_id);
  // })
}
}

loadHistory(){
 const obj={id:this.myform.value.id}
  console.log(this.myform.value);
  this.deviceService.getAllPostionBySearch(obj).subscribe(res=>{
    console.log(res)
    this.mapService.historyShow(res);
  })

}


}
