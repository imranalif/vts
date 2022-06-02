import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { CusmapService } from '../../services/cusmap.service';
import { MatTableDataSource } from '@angular/material/table';
import { DateformateService } from 'src/app/shared/services/dateformate.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  devicesArray
  deviceCurrentData = []
  deviceDataT
  deviceData = []
  deviceDataIndex = []
  myform: FormGroup;
  Id
  customer
  customerDevices
  filterDevices
  DeviceItem = []
  DeviceItemCus = []
  devicelog = []
  devicelogMatch = []
  historyData;
  Events
  poiShow=1;

  public demo1TabIndex = 0;
  public pois=[];

  deviceId
  locationData
  dataSource = new MatTableDataSource<any>([]);
  dataEvents = new MatTableDataSource<any>([]);
  //displayedColumns = ['select',  'name', 'more'];
  displayedColumns2 = ['time', 'device_id', 'event', 'more'];
  selected;
  isLoading
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private deviceService: DeviceService,
    private cusmapService: CusmapService,
    private dateFormatService: DateformateService
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
      this.getCustomerDevices(this.Id);
    });

    this.getAllEvents()

    this.cusmapService.deviceDetailsCatch.subscribe(res => {
      if (res) {
        console.log("menu time check")
        this.deviceData = []
        this.deviceData.push(res);
        this.deviceData.forEach((elem, i) => {
          this.deviceDataIndex[elem.deviceid] = this.deviceData[i];
        }
        );
        //this.deviceDataIndex[].speed=Math.round(this.deviceData.speed*1.852)
        console.log(this.deviceData)
      }
    })

    this.cusmapService.poiTabDataCatch.subscribe(res => {
      if (res) {
      this.demo1TabIndex=res;
      this.getAllPoi();
      }
    })
  }

  getCustomerDevices(id) {
    this.customerService.getCustomerByUserId(id).subscribe(data => {
      this.customer = data;
      console.log(this.customer)
    })

    // devices pulling with user id
    this.customerService.DeviceIdByUser(id).subscribe(res => {
      this.deviceId = res;
      console.log(res)
      this.selected = this.deviceId[0].deviceid
      console.log(this.selected)
      var deviceIdArray = []
      this.deviceId.forEach(element => {
        deviceIdArray.push(element.deviceid);
      });
      var devData = { id: deviceIdArray }
      this.customerService.DeviceByDeviceId(devData).subscribe(res => {
        this.devicesArray = res;
        this.customerDevices = res;
        var tdata = res
        // console.log(this.customerDevices[0].id)
        // this.selected=this.customerDevices[0].id

        tdata.forEach((element, i) => {
          this.devicelog.push(element.id)
        })

      })

      console.log(this.devicelog)
      // this.dataSource = new MatTableDataSource( res as any);
      //       console.log(this.devicelog);
    })
  }

  objectTab(tabChangeEvent: MatTabChangeEvent) {
    var inx = tabChangeEvent.index;
    if (inx == 2) {
      var indexData = { id: 2 }
      //this.cusmapService.tabIndex(indexData);
      setTimeout(() => {
        const today = new Date
        var requiredDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())

        this.myform.patchValue(
          {
            //id:3,
            from_date: requiredDate,
            to_date: new Date()
          })
      }, 100);
    }

    if (inx == 0 || inx == 1) {
      var indexD = { id: 1 }
      this.cusmapService.tabIndex(indexD);
    }

  }

  applyFilter(filterValue: string): void {

  }

  public  applyDevices(val): void {
    this.customerDevices = this.filterDevices.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

 public check(e, data):void {
    if (e) {
      console.log(data)
      //this.DeviceItem.push(1);
      this.devicelogMatch.push(data.id)
      console.log(this.devicelogMatch.length)
      console.log(this.devicelog.length)
      // var  a = this.devicelog.toString();
      var a = this.devicelogMatch.length;
      console.log(a)
      var b = this.devicelog.length
      if (a === b) {
        this.DeviceItemCus.push(1);
      }
      this.deviceService.getDeviceById(data.id).subscribe(res => {
        this.deviceCurrentData = []
        console.log(res)
        this.deviceCurrentData.push(res);
        var dt = { id: this.deviceCurrentData[0].positionid }
        this.deviceService.getDevicePositionByPositionId(dt).subscribe(response => {
          console.log(response)
          this.deviceDataT = response;
          this.deviceCurrentData = this.deviceCurrentData.map(x => Object.assign(x, this.deviceDataT.find(y => y.deviceid == x.id)))

          this.customerDevices = this.customerDevices.map(x => Object.assign(x, this.deviceDataT.find(y => y.deviceid == x.id)))
          console.log(res)
          this.customerDevices.forEach((elem, i) => {
            console.log("test")
            this.deviceDataIndex[elem.deviceid] = this.customerDevices[i];
          }
          );
          this.cusmapService.deviceDataExchange(this.deviceCurrentData);
        })
        //   this.deviceDataT=res;
        //   this.customerDevices = this.customerDevices.map(x=>Object.assign(x, this.deviceDataT.find(y=>y.deviceid==x.id)))
        //   console.log(res)
        //   this.customerDevices.forEach((elem, i) => {
        //     console.log("test")
        //    this.deviceDataIndex[elem.deviceid] = this.customerDevices[i];
        //  }
        //  );
        //   this.cusmapService.deviceDataExchange(res);
      })

    }
    else {
      if (data.deviceid) {
        data.id = data.deviceid
      }
      // this.deleteObject.push(data)
      console.log(this.devicelogMatch)
      this.devicelogMatch = this.devicelogMatch.filter(item => item !== data.id)
      console.log(this.devicelogMatch)
      this.DeviceItem = this.DeviceItem.filter(item => item !== data.id)
      this.DeviceItemCus = this.DeviceItemCus.filter(item => item !== 1)
      this.cusmapService.deviceRemove([data]);
    }

  }

  public  checkByCustomer(e, data):void {
    if (e) {
      this.DeviceItemCus.push(1);
      console.log(this.devicelog)
      this.devicelogMatch = this.devicelog;
      var devicesData = { id: this.devicelog }
      console.log(this.devicelogMatch)
      console.log(devicesData)
      this.customerService.DeviceByCustomerUserWithPosition(devicesData).subscribe(res => {
        var darray = res;
        var positionArray = [];
        darray.forEach((e, i) => {
          console.log(e)
          positionArray.push(e.positionid)
        })
        var positionData = { id: positionArray }
        this.customerService.DevicePositionByPositionId(positionData).subscribe(response => {
          var poArray = response;
          console.log(darray)
          console.log(this.customerDevices)
          this.customerDevices = darray.map(x => Object.assign(x, poArray.find(y => y.deviceid == x.id)))
          console.log(this.customerDevices)
          this.customerDevices.forEach((element, i) => {
            this.DeviceItem.push(element.id);
            // confuce/////////////
          })
          this.customerDevices.forEach((elem, i) => {
            this.deviceDataIndex[elem.deviceid] = this.customerDevices[i];
          }
          );
          this.cusmapService.deviceDataExchange(this.customerDevices);
        })

      })

      // this.singleObject.push(data)

    }
    else {
      this.customerDevices.forEach(element => {
        this.DeviceItem = this.DeviceItem.filter(item => item !== element.deviceid)
      });
      this.devicelogMatch = []
      this.DeviceItemCus = this.DeviceItemCus.filter(item => item !== 1)
      //this.DeviceItem=[]
      // this.deleteObject.push(data)
      this.cusmapService.deviceRemove(this.customerDevices);
    }
  }

  checkState(data) {
    if (this.customerDevices) {
      return this.DeviceItem.indexOf(data) > -1;
    }
  }

  checkStateC(data) {
    if (this.customerDevices) {
      return this.DeviceItemCus.indexOf(data) > -1;
    }
  }

  getAllEvents() {
    this.deviceService.getAllEvents().subscribe(res => {
      this.Events = res;
      this.dataEvents = new MatTableDataSource(res as any);
    })

  }

  loadHistory() {
    this.isLoading = true;
    var id = this.myform.value.id;
    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.from_date)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.to_date)
    const obj = { id: id, from_date: from_date, to_date: to_date }
    console.log(this.myform.value);
    this.deviceService.getHistoryPostionBySearch(obj).subscribe(res => {
      console.log("test history");
      console.log(res)
      this.historyData = res;
      this.isLoading = false;
      this.cusmapService.deviceHistory(res);
    })

  }

  getLocation(e) {
    if (e.deviceid) {
      e.id = e.deviceid
    }
    console.log(e.id)
    this.deviceService.getDeviceCurrentPositionById(e.id).subscribe(res => {
      this.locationData = res;
      // var lat=res[0].latitude;
      // var lng=res[0].longitude;
      // var data={lat:lat,lng:lng}
      this.cusmapService.deviceLocation(this.locationData);
      this.cusmapService.detailsDataExchange(this.locationData)
    })

  }

 public eventInfo(event):void {
    this.deviceService.getEventPositionById(event.id).subscribe(res => {
      console.log(res)
      this.cusmapService.eventExchange(res);
    })
  }

  public getAllPoi():void {
    this.deviceService.getAllPois().subscribe(res => {
      this.pois=res
    })
  }

}
