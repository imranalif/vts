import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { MapService } from 'src/app/client/user/services/map.service';
import { ResellermapService } from '../../services/resellermap.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { CusmapService } from 'src/app/map/customer-map/services/cusmap.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  devices = []
  devicesC = []
  devicesIndex = []
  deviceCheckDataIndex = []
  singleObject = []
  deleteObject = []
  devicesArray
  deviceCurrentData = []
  deviceDataT
  deviceData = []
  deviceDataIndex = []
  permission: any[] = [];
  checkPermi = []
  allDevices: any[] = [];
  myform: FormGroup;
  Id
  customers
  customerData = []
  resellerData
  customerDevices
  filterDevices
  DeviceItem = []
  DeviceItemCus = []
  devicelog = []
  devicelogMatch = []
  historyData;
  Events

  deviceId
  locationData

  reserve = []
  DeviceView = []
  groupDevice = []
  dataSource = new MatTableDataSource<any>([]);
  dataEvents = new MatTableDataSource<any>([]);
  //displayedColumns = ['select',  'name', 'more'];
  displayedColumns = ['time', 'device_id', 'event', 'more'];
  selected;
  isLoading
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private deviceService: DeviceService,
    private mapService: MapService,
    private resellermapService: ResellermapService,
    private dateFormatService: DateformateService,
    private cusmapService:CusmapService

  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      id: [],
      from_date: [''],
      to_date: [''],
      status: [''],
      customer_id: [''],
      d: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      console.log(this.Id)
      this.getCustomerByReseller(this.Id);
    });

    
//     setTimeout(()=>{                      
//       this.getAllEvents();
// }, 5000);
  }

  getCustomerByReseller(id) {
    console.log(id)
    this.customerService.getCustomerById(id).subscribe(res => {
      this.resellerData = res;
      this.customerService.getCustomerByReseller(this.resellerData.id).subscribe(response => {
        this.customers = response;
        this.customerData.push(res);
        this.customers.forEach(element => {
          this.customerService.DeviceByCustomerId(element.customer_id).subscribe(data => {
            console.log(data)
            if (data) {
              
              this.permission[element.customer_id] = data;
              this.checkPermi[element.customer_id] = data;

              data.forEach((element, i) => {
                this.devices.push(element);
                console.log(this.devices[0].id)
                this.selected=this.devices[0].id
                this.devicesIndex[element.id] = data[i];
                this.allDevices.push(element.id);
              });
            }

          })
        });
      })
    })
  }

  getAllEvents() {
    console.log(this.allDevices)
    var data = { id: this.allDevices }
    this.deviceService.getAllEventsByReseller(data).subscribe(res => {
      console.log(res)
      this.Events = res;
      this.dataSource = new MatTableDataSource(res as any);
    })
  }
  applyFilter(e){

  }

  objectTab(tabChangeEvent: MatTabChangeEvent) {
    var inx = tabChangeEvent.index;
    console.log(inx)
    if (inx == 2) {
      var indexData = { id: 2 }
      this.mapService.hideWithIndexHistory(indexData);
      const today = new Date
      var requiredDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      this.myform.patchValue({
        //id:3,
        from_date: requiredDate,
        to_date: new Date()
      })
    }
    if (inx == 0 || inx == 1) {
      var indexD = { id: 1 }
      this.resellermapService.showWithIndexDetails(indexD);
    }
    if (inx == 1) {
      this.getAllEvents();
    }
  }

  public checkState(data: string): boolean {
    if (this.devices) {
      return this.DeviceItem.indexOf(data) > -1;
    }
  }

  getLocation(e) {
    this.deviceService.getDeviceCurrentPositionById(e.id).subscribe(res => {
      console.log(e.id)
      console.log(res)
      this.resellermapService.updateLocation(res);
      this.resellermapService.selectedDeviceDataExchange(res)
    })
  }

 
  getAllDevice() {
    if (this.devices) {
      this.devices.forEach((elem, i) => {
        this.devicesIndex[elem.id] = this.devices[i];
      })
    }
  }


  check(e, data) {
    if (e) {
      console.log(data)
      this.singleObject.push(data)
      this.deviceService.getDeviceById(data.id).subscribe(res => {
        this.deviceCurrentData = []
        this.deviceCurrentData.push(res);
        var dt = { id: this.deviceCurrentData[0].positionid }
        this.deviceService.getDevicePositionByPositionId(dt).subscribe(response => {
          this.deviceDataT = response;
          this.deviceCurrentData = this.deviceCurrentData.map(x => Object.assign(x, this.deviceDataT.find(y => y.deviceid == x.id)))
          this.deviceDataT.forEach((elem, i) => {
            this.deviceCheckDataIndex[elem.deviceid] = this.deviceDataT[i];
          });
          this.resellermapService.devicePosition(this.deviceCurrentData);
        })
      })
    }
    else {
      this.deleteObject.push(data)
      this.resellermapService.removeData([data]);
    }
  }

  checkAllByGroup(e: any, id) {
    console.log(id)
    if (e) {
      this.customerService.DevicePositionByCustomer(id).subscribe(res => {
        var darray = res;
        var positionArray = [];
        darray.forEach((e, i) => {
          console.log(e)
          positionArray.push(e.positionid)
        })
        var positionData = { id: positionArray }
        this.customerService.DevicePositionByPositionId(positionData).subscribe(data => {
          if (data.length > 0) {
            console.log(data)
            this.resellermapService.devicePosition(data);
            data.forEach((elem, i) => {
              this.deviceCheckDataIndex[elem.deviceid] = data[i];
            });
            data.forEach((element, i) => {
              this.groupDevice.push(element)
              console.log(this.devices)
              var v = this.devices.find(x => x.id === element.deviceid);
              console.log(v)
              this.DeviceItem.push(v.id);
              this.DeviceView.push(v);
              this.reserve.push({ customer_id: v.assign_customer_id, id: element.deviceid, name: v.name });
            });
          }
        })
      }
      )
    }
    else {
      console.log(this.reserve)
      this.reserve.forEach((element, i) => {
        if (element.customer_id == id) {
          this.DeviceItem = this.DeviceItem.filter(m => m !== element.id);
          this.resellermapService.removeData([element])
        }
      });
    }
  }

  loadHistory() {
    this.isLoading = true;
    //const obj={id:this.myform.value.id}
    var id = this.myform.value.id
    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.from_date)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.to_date)
    const obj = { id: id, from_date: from_date, to_date: to_date }
    this.deviceService.getHistoryPostionBySearch(obj).subscribe(res => {
      console.log(res)
      this.isLoading = false;
      this.resellermapService.historyShow(res);
    })
  }

  eventInfo(event) {
    console.log(event)
    this.deviceService.getEventPositionById(event.id).subscribe(res => {
      console.log(res)
      this.cusmapService.eventExchange(res);
    })
  }

}
