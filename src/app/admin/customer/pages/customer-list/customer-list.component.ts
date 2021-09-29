import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
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



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  myform: FormGroup;
  customers;
  currentPage = 1;
  params = {}
  pager: any = [];
  record: any = [];
  page
  assigedRole=[];
  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private pagination: PaginationService,
    private fb: FormBuilder,
  ) { this.assigedRole = JSON.parse(localStorage.getItem('rolesData')); }

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  displayedColumns = ['action','id', 'customer_id', 'name', 'email', 'phone', 'contact_address', 'billing_address',];

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer_id: [''],
      name: [''],
      email: [''],
      phone: [''],

    });
    this.getAllCustomer();
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
      currentPage: this.currentPage, name: this.myform.value.name,
      customer_id: this.myform.value.customer_id, email: this.myform.value.email, phone: this.myform.value.phone,
    };
    console.log(this.params);
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
    console.log(data.customer_id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(CustomerDeviceComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.customer_id }
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

}
