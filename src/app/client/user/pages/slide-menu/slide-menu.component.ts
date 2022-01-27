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
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { CusmapService } from 'src/app/map/customer-map/services/cusmap.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  deviceCurrentData = []
  deviceDataT
  nameDisp
  historyData
  isLoading: boolean
  reCheck: boolean = false;
  singleObject = []
  deleteObject = []
  groupDevice = []
  box: boolean = true
  DeviceItem = []
  DeviceView = []
  DeviceRemove = []
  reserve = []
  isOpen = false;
  customers
  Events
  customerData = []
  permission: any[] = [];
  checkPermi = []
  allDevices: any[] = [];
  devices
  devicesIndex = []
  filterDevices
  customerjoindevices

  deviceCheckData
  deviceCheckDataIndex = []

  myform: FormGroup;
  myform2: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['time', 'device_id', 'event', 'more'];
  status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  selected = 1;
  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private mapService: MapService,
    private customerService: CustomerService,
    private loginService: LoginService,
    private dateFormatService: DateformateService,
    private cusmapService: CusmapService,
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
    // this.myform2 = this.fb.group({
    //   //customer_id:[''],

    // });

    this.getAllCustomer();
    this.getAllDevice();
    this.getAllEvents();
    //this.getAllCustomerWithDevices()
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
          if (data) {
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

    this.mapService.detailsDataCatch.subscribe(response => {
      if (response) {
        this.deviceCheckData = response;
        this.deviceCheckData.forEach((elem, i) => {
          this.deviceCheckDataIndex[elem.deviceid] = this.deviceCheckData[i];
        }
        )
      }
    })

  }


  getAllCustomer(): void {
    this.customerService.getAllCustomerList().subscribe(res => {
      this.customers = res;
      this.nameDisp = res
      this.customerData.push(res);
      this.customers.forEach(element => {
        this.customerService.DeviceByCustomer(element.customer_id).subscribe(data => {
          if (data) {
            this.permission[element.customer_id] = data;
            this.checkPermi[element.customer_id] = data;

            data.forEach(element => {
              this.allDevices.push(element.deviceid);
            });
          }

        })
      });
    });
  }
  getAllCustomerWithDevices() {
    this.customerService.getAllCustomerListJoinWithDevices().subscribe(res => {
      this.customerjoindevices = res
    })
  }

  getAllDevice() {

    this.deviceService.getAllDevices().subscribe(res => {
      this.devices = res;
      this.devices.forEach((element, i) => {
        //this.DeviceItem.push(element.id);
        //this.groupItemCompare.push(element.permission);
        //this.permissionGroup.push(element.group_id);
      });

      this.devices.forEach((elem, i) => {
        this.devicesIndex[elem.id] = this.devices[i];

      }
      );
      //console.log(this.devicesIndex)

      //this.dataSource = new MatTableDataSource( res as any);
    })
  }

  getAllEvents() {
    this.deviceService.getAllEvents().subscribe(res => {
      this.Events = res;
      this.dataSource = new MatTableDataSource(res as any);
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
      this.deviceService.getDeviceById(data.id).subscribe(res => {
        this.deviceCurrentData = []
        this.deviceCurrentData.push(res);
        var dt = { id: this.deviceCurrentData[0].positionid }
        this.deviceService.getDevicePositionByPositionId(dt).subscribe(response => {
          this.deviceDataT = response;
          this.deviceCurrentData = this.deviceCurrentData.map(x => Object.assign(x, this.deviceDataT.find(y => y.deviceid == x.id)))
          this.deviceDataT.forEach((elem, i) => {
            this.deviceCheckDataIndex[elem.deviceid] = this.deviceDataT[i];
            console.log(this.deviceCheckDataIndex[elem.deviceid].servertime)
          });
          this.mapService.devicePosition(this.deviceCurrentData);
        })
        //   this.deviceCheckData=res;
        //   console.log(this.deviceCheckData)
        //   this.deviceCheckData.forEach((elem, i) => {
        //    this.deviceCheckDataIndex[elem.deviceid] = this.deviceCheckData[i];
        //    console.log(this.deviceCheckDataIndex[elem.deviceid].servertime)
        //  });
        console.log(this.deviceCurrentData)
       
      })
      //this.mapService.updateData([data]);

      //this.mapService.DeviceMoveUpdate(this.singleObject);
    }
    else {
      this.deleteObject.push(data)
      //this.mapService.updateData(this.deleteObject);
      //this.mapService.updateData(data.unique_id);
      this.mapService.removeData([data]);
    }

  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  filterItem(filterValue: string): void {
    console.log(filterValue)
    this.customers = this.nameDisp.filter((unit) => unit.name.toLowerCase().indexOf(filterValue) > -1);
    //this.permission = this.checkPermi.filter((unit) => unit.name.toLowerCase().indexOf(filterValue) > -1);
  }
  applyDevices(val): void {
    this.devices = this.filterDevices.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

  getLocation(e) {
    this.deviceService.getDeviceCurrentPositionById(e.id).subscribe(res => {
      console.log(e.id)
      console.log(res)
      this.mapService.updateLocation(res);
      this.mapService.selectedDeviceDataExchange(res)
    })
  }




  objectTab(tabChangeEvent: MatTabChangeEvent) {
    var inx = tabChangeEvent.index;
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
      this.mapService.showWithIndexDetails(indexD);
    }

  }


  checkAllByGroup(e: any, id) {
    console.log(id)
    if (e) {
      this.customerService.DevicePositionByCustomer(id).subscribe(res => {
        var darray=res;
        var positionArray=[];
        darray.forEach((e,i)=>{
          console.log(e)
          positionArray.push(e.positionid)
        })
        var positionData={id:positionArray}
        this.customerService.DevicePositionByPositionId(positionData).subscribe(data=>{
          if (data.length > 0) {
            console.log(data)
            this.mapService.devicePosition(data);
            data.forEach((elem, i) => {
              this.deviceCheckDataIndex[elem.deviceid] = data[i];
            });
            //this.mapService.DeviceMoveUpdate(data);
            data.forEach((element, i) => {
              this.groupDevice.push(element)
              var v = this.devices.find(x => x.id === element.deviceid);
              console.log(v)
              //this.mapService.devicePosition(data);
              //console.log(this.DeviceView)
              this.DeviceItem.push(v.id);
              this.DeviceView.push(v);
  
              this.reserve.push({ customer_id: v.assign_customer_id, id: element.deviceid, name: v.name });
              // this.groupItemCompare.push(element.permission);
              // this.permissionGroup.push(element.group_id);
            });
            //this.mapService.updateData(this.DeviceView);
            //console.log(this.DeviceView)
          }
        })

        // if (data.length > 0) {
        //   console.log(data)
        //   this.mapService.devicePosition(data);
        //   data.forEach((elem, i) => {
        //     this.deviceCheckDataIndex[elem.deviceid] = data[i];
        //   });
        //   //this.mapService.DeviceMoveUpdate(data);
        //   data.forEach((element, i) => {
        //     this.groupDevice.push(element)
        //     var v = this.devices.find(x => x.id === element.deviceid);
        //     console.log(v)
        //     //this.mapService.devicePosition(data);
        //     //console.log(this.DeviceView)
        //     this.DeviceItem.push(v.id);
        //     this.DeviceView.push(v);

        //     this.reserve.push({ customer_id: element.assign_customer_id, id: element.deviceid, name: v.name });
        //     // this.groupItemCompare.push(element.permission);
        //     // this.permissionGroup.push(element.group_id);
        //   });
        //   //this.mapService.updateData(this.DeviceView);
        //   //console.log(this.DeviceView)
        // }


      }
      )
    }
    else {
      console.log(this.reserve)
      this.reserve.forEach((element, i) => {
        //var n = this.reserve.find(m => m.customer_id=== id);
        if (element.customer_id == id) {
          this.DeviceItem = this.DeviceItem.filter(m => m !== element.id);
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
      this.mapService.historyShow(res);
    })
  }

  eventInfo(event) {
    this.deviceService.getEventPositionById(event.id).subscribe(res => {
      console.log(res)
      this.cusmapService.eventExchange(res);
    })
  }


}
