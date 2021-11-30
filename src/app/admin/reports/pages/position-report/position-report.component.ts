import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReportService } from '../../services/report.service';
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
  selector: 'app-position-report',
  templateUrl: './position-report.component.html',
  styleUrls: ['./position-report.component.scss']
})
export class PositionReportComponent implements OnInit {
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
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  link="http://www.google.com/maps/place/"
  isLoading = true;
  displayedColumns = [ 'device', 'time','latlng', 'address', 'speed','status', 'ignition','charge','batterylevel','rssi','distance','totaldistance','motion','enginehours','sat' ];
  constructor(private reportService: ReportService,
    private pagination: PaginationService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private deviceService: DeviceService,
    private dateFormatService: DateformateService,
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
      // report call here for delay
      this.getReport(); 
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


  getReport(): void {
    
    this.devicesAC=this.devicesArray
    console.log(this.devicesAC)
    const today=new Date
    var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())

    var from_date = this.dateFormatService.dateTime('datetime', requiredDate)
    var to_date = this.dateFormatService.dateTime('datetime', today)


    this.params = {devicesearch:this.devicesAC, currentPage: this.currentPage, fromdate: from_date,
      todate:to_date };
    this.reportService.getPositionByPage(this.params).subscribe(res => {
      this.reportData = res.rows;
      this.reportData.forEach((e,i) => {
        this.reportData[i].a= JSON.parse(e.attributes) 
      });
      this.record = res.count;
      this.pager = this.pagination.paginate(this.record);
      this.dataSource = new MatTableDataSource(this.reportData as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
      this.isLoading = false;

    });
  }

  getPositionByPage(currentPage): void {
    this.devicesAC=this.devicesArray
    console.log(currentPage)
    this.page = currentPage;
    if (this.page > this.pager.totalPages) {
      return;
    }
    // , id: this.myform.value.id,
    //   fromdate: this.myform.value.from, todate: this.myform.value.todate

    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.todate)

    this.params = {
      devicesearch:this.devicesAC,
      currentPage: currentPage, fromdate: from_date,
      todate:to_date 

    };
    this.reportService.getPositionByPage(this.params).subscribe(res => {
      this.isLoading = false;
      this.reportData = res.rows;
      this.reportData.forEach((e,i) => {
        this.reportData[i].a= JSON.parse(e.attributes) 
      });
      this.pager = this.pagination.paginate(this.record, currentPage);
      this.dataSource = new MatTableDataSource(this.reportData as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getPositionBySearch(): void {
    //var devices=this.devicesArray
    if(this.myform.value.deviceid){
      this.devicesArray=this.myform.value.deviceid
    }
    
    var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate)
    var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.todate)
    this.params = {
      devicesearch:this.devicesArray,
      currentPage: this.currentPage, fromdate: from_date,
      todate:to_date 
    };
    console.log(this.params);
    this.reportService.getPositionByPage(this.params).subscribe(res => {
      this.isLoading = false;
      this.reportData = res.rows;
      this.reportData.forEach((e,i) => {
        this.reportData[i].a= JSON.parse(e.attributes) 
      });
      this.record = res.count;
      this.pager = this.pagination.paginate(this.record);
      this.dataSource = new MatTableDataSource( this.reportData as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    }
    );
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
    this.getReport(); 
  }

  gotoGoogleMap(a,b){
    this.mapurl=this.link+a+','+b
    //this.router.navigate([url]);  
  }
  

}
