import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { JsontocsvService } from '../../services/jsontocsv.service';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { MatSort } from '@angular/material/sort';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drives-stops-report',
  templateUrl: './drives-stops-report.component.html',
  styleUrls: ['./drives-stops-report.component.scss']
})
export class DrivesStopsReportComponent implements OnInit {

  myform: FormGroup;
  page
  reportData
  params = {}
  pager: any = [];
  record: any = [];
  currentPage=1;
  customers
  customerDevices
  devices
  devicesAC=[]
  devicesArray=[]
  devicesIndex=[]
  arrrayValue: any = [];
  mapurl
  stopdata
  
  startdata
  stopflag=0
  startflag=0
  preSpeed=0;
  startstopArray=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  link="http://www.google.com/maps/place/"
  isLoading = true;
  displayedColumns = [ 'status', 'start','end', 'duration', 'top_speed','address' ];
  constructor(private reportService: ReportService,
    private pagination: PaginationService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private deviceService: DeviceService,
    private dateFormatService: DateformateService,
    private csv: JsontocsvService,
    private router: Router,) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer: [''],
      deviceid: [''],
      fromdate: [''],
      todate: [''],
      

    });
    this.getAllDevices()
    this.getAllCustomer()
    this.getReport(); 
    setTimeout(()=>{   
     
      const today=new Date
      var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
      this.myform.patchValue(
        {
        fromdate: requiredDate,
        todate:new Date()
      })
      
    }, 50);
  }

  getReport(): void {
    this.devicesArray=[1]
    this.devicesAC=this.devicesArray
    console.log(this.devicesAC)
    const today=new Date
    var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())

    var from_date = this.dateFormatService.dateTime('datetime', requiredDate)
    var to_date = this.dateFormatService.dateTime('datetime', today)

    this.params = {devicesearch:this.devicesAC, fromdate: from_date,
      todate:to_date };
    this.reportService.getPositionWithDriveStop(this.params).subscribe(res => {
      this.reportData = res;
      console.log(res)
      this.reportData.forEach((e,i) => {
        //this.reportData[i].a= JSON.parse(e.attributes) 
      });
    });
  }

  getReportBySearch(){
    this.devicesArray=[1]
    this.devicesAC=this.devicesArray
    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.todate)

    this.params = {devicesearch:this.devicesAC, fromdate: from_date,
      todate:to_date };
    this.reportService.getPositionWithDriveStop(this.params).subscribe(res => {
      this.reportData = res;
      console.log(res)
      this.reportData.forEach(e => {
        if(e.speed==0){
          this.startflag=0
         if(this.stopflag==0){
          if(this.startdata){
            this.startdata.end=this.dateFormatService.dateTime('datetime', e.fixtime);
            console.log(this.startdata.end)
            this.startdata.duration=new Date(this.startdata.end).valueOf() - new Date(this.startdata.start).valueOf();
            this.startdata.duration=this.msToTime(this.startdata.duration)
          this.startdata.topSpeed=Math.round(this.preSpeed * 1.852);
            this.startstopArray.push(this.startdata)
            this.preSpeed=0;
          }
          e.fixtime=this.dateFormatService.dateTime('datetime', e.fixtime);
          this.stopdata={status:'Stopped',start:e.fixtime,end:'',duration:'',topSpeed:'',latitude:e.latitude,longitude:e.longitude}
          this.stopflag=1;
         }
  
        }

        if(e.speed!=0){
          if(this.preSpeed<e.speed){
            this.preSpeed=e.speed
          }
          this.stopflag=0;
          if(this.startflag==0){
            if(this.stopdata){

              this.stopdata.end=this.dateFormatService.dateTime('datetime', e.fixtime);
              this.stopdata.duration=new Date(this.stopdata.end).valueOf() - new Date(this.stopdata.start).valueOf();
              this.stopdata.duration=this.msToTime(this.stopdata.duration)
              this.startstopArray.push(this.stopdata)
            }
            e.fixtime=this.dateFormatService.dateTime('datetime', e.fixtime);
          this.startdata={status:'Moving',start:e.fixtime,end:'',duration:'',topSpeed:'',latitude:e.latitude,longitude:e.longitude}
          this.startflag=1
        }
        }
        //this.reportData[i].a= JSON.parse(e.attributes) 
      });
      console.log(this.startstopArray)
      this.dataSource = new MatTableDataSource( this.startstopArray as any);
    });
  }




   msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;
    if(hours){
      return hours + "h " + minutes + "min " + seconds + "s";
    }

    return  minutes + "min " + seconds + "s";
  }



  getAllCustomer(): void {
    this.customerService. getAllCustomerList().subscribe(res => {
      this.customers = res;
    });
  }

  onChangeCustomer(e){
    this.deviceService.getDeviceByCustomerId(e).subscribe(res=>{
      this.customerDevices=res;
    })
  }

  getAllDevices(){
    this.deviceService.getAllDevices().subscribe(res=>{
      this.devices=res;
      console.log(this.devices)
      this.devices.forEach((elem, i) => {
this.devicesArray.push(this.devices[i].id)
        this.devicesIndex[elem.id] = this.devices[i];
      }
      );
      // report call here for delay
      //this.getReport(); 
    })
  }

  public selectAll(ev) {
    console.log(ev)
    this.arrrayValue = [...Array(this.devices.length + 1).keys()];
    if (ev._selected) {
        this.myform.get('deviceid').setValue(this.arrrayValue);
        ev._selected = true;
      }
    if (ev._selected === false) {
        this.myform.get('deviceid').setValue([]);
        console.log('3');
      }
    }


    getPositionBySearch(){}
    goBack(){}

    gotoGoogleMap(a,b){
      this.mapurl=this.link+a+','+b
      //this.router.navigate([url]);  
    }

    convertCsv() {
      return this.csv.downloadFile(this.reportData);
    }
  

}
