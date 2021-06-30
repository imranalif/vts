import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { MapService } from '../../services/map.service';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
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
  customerData=[]
  permission: any[] = [];
  allDevices: any[] = [];
devices
devicesIndex=[]
filterDevices
myform: FormGroup;
myform2: FormGroup;
dataSource = new MatTableDataSource<any>([]);
displayedColumns = ['select', 'name', 'identifier', 'more'];
status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private mapService:MapService,
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      id: [''],
      from_date: [''],
      to_date: [''],
      status: [''],
      customer_id:[''],
      d:['']
    });
    // this.myform2 = this.fb.group({
    //   id: [''],
    //   from_date: [''],
    //   to_date: [''],
    //   d: ['', Validators.required],

    // });
    this.getAllCustomer();
    this.getAllDevice()
    this.myform.value.d=3;
    this.myform.patchValue({d: 7})
    this.myform.get('d').setValue(4);
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
              this.allDevices.push(element.device_id);
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
    console.log(this.devicesIndex)

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
}

objectTab(e){
  console.log("1234");
}

checkAllByGroup(e: any, id){

  if(e){
  this.customerService.DeviceByCustomer(id).subscribe(data => {
    //this.mapService.DeviceMoveUpdate(data);
    data.forEach((element, i) => {
      this.groupDevice.push(element)
      var v=this.devices.find(x => x.id === element.device_id);
      console.log(v)
      this.mapService.updateData([v]);
      //console.log(this.DeviceView)
       this.DeviceItem.push(v.id);
       this.DeviceView.push(v);
       
      this.reserve.push({customer_id:element.customer_id,device_id:element.device_id,name:v.name});
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
      this.DeviceItem = this.DeviceItem.filter(m => m !== element.device_id);
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
  console.log(this.myform.value);
}


}