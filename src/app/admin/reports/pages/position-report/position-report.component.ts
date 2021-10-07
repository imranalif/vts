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
  devicesIndex=[]
  arrrayValue: any = [];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  displayedColumns = [ 'device', 'time','latitude', 'longitude', 'address', 'altitude','speed','status', 'ignition','charge','blocked','batterylevel','rssi','sequence','distance','totaldistance','motion','valid','enginehours','sat' ];
  constructor(private reportService: ReportService,
    private pagination: PaginationService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private deviceService: DeviceService,) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer: [''],
      deviceid: [''],
      fromdate: [''],
      todate: [''],
      

    });
    this.getAllDevices()
    this.getReport();
    this.getAllCustomer()
    

    setTimeout(()=>{    
      const today=new Date
      var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
      this.myform.patchValue(
        {
        fromdate: requiredDate,
        todate:new Date()
      })
    }, 10);
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
        this.devicesIndex[elem.id] = this.devices[i];
      }
      );
    })
  }

  public selectAll(ev) {
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
    const today=new Date
    var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate())
    this.params = { currentPage: this.currentPage, fromdate: requiredDate,
      todate:new Date() };
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
    console.log(currentPage)
    this.page = currentPage;
    if (this.page > this.pager.totalPages) {
      return;
    }
    // , id: this.myform.value.id,
    //   fromdate: this.myform.value.from, todate: this.myform.value.todate
    this.params = {
      currentPage: currentPage, fromdate: this.myform.value.fromdate,
      todate:this.myform.value.todate 

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
    this.params = {
      currentPage: this.currentPage, fromdate: this.myform.value.fromdate,
      todate:this.myform.value.todate 
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
  

}
