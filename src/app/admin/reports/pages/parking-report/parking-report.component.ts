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
  selector: 'app-parking-report',
  templateUrl: './parking-report.component.html',
  styleUrls: ['./parking-report.component.scss']
})
export class ParkingReportComponent implements OnInit {

  myform: FormGroup;
  positionArray=[]
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
  onOffData=[]
  onData
  offData
  d

  stopflag=0
  startflag=0
  preSpeed=0;
  startstopArray=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  link="http://www.google.com/maps/place/"
  isLoading = true;
  displayedColumns = [ 'name', 'imei','model', 'status', 'stime','etime','ttime' ];
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

    this.getAllDevices()
    this.getAllCustomer()

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

    goBack(){
      this.myform.value.customer=' ';
      const today=new Date
      var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
      this.myform.patchValue(
        {
          deviceid:'',
          customer:'',
        fromdate: requiredDate,
        todate:new Date()
      })
    }

    getReportBySearch(){}


}
