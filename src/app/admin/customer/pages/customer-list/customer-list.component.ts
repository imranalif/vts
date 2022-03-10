import { Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import { timer, interval, Subscription } from "rxjs";
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CustomerService } from '../../services/customer.service';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDeviceComponent } from 'src/app/admin/devices/pages/customer-device/customer-device.component';
import { CustomerDriverComponent } from 'src/app/admin/driver/pages/customer-driver/customer-driver.component';
import { ResellerDeviceComponent } from '../reseller-device/reseller-device.component';
import { DeviceImportStatusComponent } from '../device-import-status/device-import-status.component';
import { MediaObserver, MediaChange } from '@angular/flex-layout';




@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit,OnDestroy {
  mediaSub: Subscription;
  tr :boolean
  fa:boolean
  myform: FormGroup;
  customers;
  currentPage = 1;
  params = {}
  pager: any = [];
  record: any = [];
  page
  assigedRole=[];
  testingValue
  obs: Subscription;
  states = [{ id: 0, value: 'Inactive'},{ id: 1, value: 'Active' }  ];
  resale = [ { id: 0, value: ' ' },{ id: 1, value: 'YES' }];
  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private pagination: PaginationService,
    private fb: FormBuilder,
    private mediaObserver: MediaObserver,
  ) { this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
  this.testingValue = 0;
 }

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  displayedColumns = ['action','id', 'customer_id', 'name', 'email', 'phone', 'reseller', 'status',];

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer_id: [''],
      name: [''],
      email: [''],
      phone: [''],
      reseller_id: [],
      status: [],

    });
    this.getAllCustomer();
    this.obs = this.customerService.deviceImportStatusCatch.subscribe(res => {
      if(this.testingValue==1 && res){
        setTimeout(() => {
          this.openDeviceImportStatusModal();
        }, 50);
      }
    })

    this.addTestingValue();

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        if(result.mqAlias=='xs'){
          this.tr=true;
          this.fa=false;
        }
        else{
          this.tr=false;
          this.fa=true; 
        }
      }
    )
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

  addTestingValue(){
    this.testingValue = 1;
  }

  getAllCustomerTest(): void {
    this.customerService.getAllCustomer(this.params).subscribe(res => {
      this.customers = res;
      this.dataSource = new MatTableDataSource(this.customers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));

      this.isLoading = false;

    });
  }

  getAllCustomer(): void {
    this.params = { currentPage: this.currentPage };
    this.customerService.getAllCustomer(this.params).subscribe(res => {
      this.customers = res.rows;
      this.record = res.count;
      console.log(res.count)
      this.pager = this.pagination.paginate(this.record);
      console.log(this.pager.totalPages)
      this.dataSource = new MatTableDataSource(this.customers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
      this.isLoading = false;

    });
  }

  getCustomerByPage(currentPage): void {
    this.page = currentPage;
    if (this.page > this.pager.totalPages) {
      return;
    }
    this.params = {
      currentPage: currentPage, name: this.myform.value.name,
      customer_id: this.myform.value.customer_id, email: this.myform.value.email, phone: this.myform.value.phone,

    };
    this.customerService.getAllCustomer(this.params).subscribe(res => {
      this.isLoading = false;
      this.customers = res.rows;
      // this.record = res.count;
      console.log(this.record);
      this.pager = this.pagination.paginate(this.record, currentPage);
      this.dataSource = new MatTableDataSource(this.customers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getCustomerBySearch(): void {
    this.params = {
      currentPage: this.currentPage, name: this.myform.value.name, reseller_id: this.myform.value.reseller_id,
      customer_id: this.myform.value.customer_id, email: this.myform.value.email, phone: this.myform.value.phone,
      status: this.myform.value.status,
    };
  
    this.customerService.getAllCustomer(this.params).subscribe(res => {
      this.isLoading = false;
      this.customers = res.rows;
      this.record = res.count;
      this.pager = this.pagination.paginate(this.record);

      this.dataSource = new MatTableDataSource(this.customers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    }
    );
  }

  getBack() {
    this.getAllCustomer();
    //this.myform.reset();
  }
  applyFilter(filterValue: string) {

  }

  editCustomer(data){
    this.router.navigate(['admin/customer/edit', data]);
  }
  openDeviceModal(data) {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(CustomerDeviceComponent,  {
      width: '580px',
      height: '460px',
      data: {id:data.id,reseller:data.reseller, customer_id: data.customer_id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openDriverModal(data){
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(CustomerDriverComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.customer_id }
    }).afterClosed()
    .subscribe(response => {});
  }

  goAddPage(){
    this.router.navigate(['admin/customer/add']);
  }

  public cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
  }

  customerQuery(data){
    this.router.navigate(['admin/customer/customer-query',data]);
  }
  resellerCustomer(data){
    this.router.navigate(['admin/customer/reseller-customer',data]);
  }

  openResellerDeviceModal(data){
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(ResellerDeviceComponent,  {
      width: '580px',
      height: '460px',
       data: {id:data.id,reseller:data.reseller, customer_id: data.customer_id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openDeviceImportStatusModal() {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";

    this.dialog.open(DeviceImportStatusComponent, {
      width: '580px',
      height: '260px',
      //data: this.errorData
    }).afterClosed()
      .subscribe(response => { });
  }


  exportPdf(): void{
    const doc = new jsPDF('portrait', 'px', 'a4');
    const data = [];
    const displayedColumns = ['name', 'email', 'phone','reseller'];

    this.dataSource.filteredData.forEach(obj => {
    const arr = [];
    displayedColumns.forEach(col => {
      arr.push(obj[col]);
    });
    data.push(arr);
  });

    autoTable(doc, {  head: [['name', 'email', 'phone','reseller']],
  body: data });
    // doc.autoTable({
    //   head: [['name', 'email', 'phone','reseller']],
    //   body: data
    // });
    doc.save('customer.pdf');
  }

}
