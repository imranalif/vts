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
  selector: 'app-ignition-report',
  templateUrl: './ignition-report.component.html',
  styleUrls: ['./ignition-report.component.scss']
})
export class IgnitionReportComponent implements OnInit {

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
  displayedColumns = [ 'ignition', 'event','speed', 'trip', 'engine','stop','driver','address' ];
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
      todate: ['']
    });

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


    getReportBySearch(){
      this.devicesArray=[1]
    this.devicesAC=this.devicesArray
    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.todate)

    this.params = {devicesearch:this.devicesAC, fromdate: from_date,
      todate:to_date };
    this.reportService.getEventWithPosition(this.params).subscribe(res => {
      this.reportData=res;

      this.reportData.forEach(e => {
        if(e.type=="ignitionOn"){
          
        }
        
      });

    })
    }
    goBack(){}

    gotoGoogleMap(a,b){
      this.mapurl=this.link+a+','+b
      //this.router.navigate([url]);  
    }

    convertCsv() {
      return this.csv.downloadFile(this.reportData);
    }

}
