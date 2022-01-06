import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';



@Component({
  selector: 'app-reseller-customer-list',
  templateUrl: './reseller-customer-list.component.html',
  styleUrls: ['./reseller-customer-list.component.scss']
})
export class ResellerCustomerListComponent implements OnInit {
  myform: FormGroup;
  userData
  customerData
  resellerAutoId
  customers
  isLoading = true;

  params = {}
  currentPage = 1;

  states = [{ id: 0, value: 'Inactive'},{ id: 1, value: 'Active' }  ];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['action','id', 'customer_id', 'name', 'email', 'phone',  'status',];
  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
   }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer_id: [''],
      name: [''],
      email: [''],
      phone: [''],
      status: [''],

    });
    this.getResellerAutoId();
  }

  getResellerAutoId(){
    this.customerService.getResellerAutoId(this.userData.customer_id).subscribe(res=>{
  this.customerData=res;
  this.resellerAutoId=this.customerData.id
  this.customerService.getCustomerByResellerId(this.resellerAutoId).subscribe(response=>{
    this.customers = response;
    this.dataSource = new MatTableDataSource(this.customers as any);
    setTimeout(() => (this.dataSource.sort = this.sort));
    setTimeout(() => (this.dataSource.paginator = this.paginator));

    this.isLoading = false;
    console.log(response)
  })
    })
  }

  getCustomerBySearch(): void {
    this.params = {
      reseller_id:this.resellerAutoId,
      currentPage: this.currentPage, name: this.myform.value.name,status:this.myform.value.status,
      customer_id: this.myform.value.customer_id, email: this.myform.value.email, phone: this.myform.value.phone,
    };
    console.log(this.params);
    this.customerService.getAllCustomer(this.params).subscribe(res => {
      this.isLoading = false;
      this.customers = res.rows;
      // this.record = res.count;
      // this.pager = this.pagination.paginate(this.record);

      this.dataSource = new MatTableDataSource(this.customers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    }
    );
  }

  getBack() {
    this.getResellerAutoId();
    //this.myform.reset();
  }

  goAddPage(){
    this.router.navigate(['reseller/reseller-customer/add']);
  }

  editCustomer(id){
    this.router.navigate(['reseller/reseller-customer/edit', id]);
  }
  

}
