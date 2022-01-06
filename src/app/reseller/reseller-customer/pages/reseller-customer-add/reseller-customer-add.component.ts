import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';

@Component({
  selector: 'app-reseller-customer-add',
  templateUrl: './reseller-customer-add.component.html',
  styleUrls: ['./reseller-customer-add.component.scss']
})
export class ResellerCustomerAddComponent implements OnInit {

  myform: FormGroup;
  Id
  resellerAutoId
  customerData
  userData;
  submitted = false;
  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private customerService:CustomerService,
    private route:ActivatedRoute) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
     }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer_id:[],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      reseller: [],
      status: [],
      notes: [''],
      phone: ['',Validators.pattern('[- +()0-9]+')],
      billing_address: [ '',[Validators.required]],
      contact_address: ['' ,[Validators.required]]
    });
    this.getResellerAutoId()
   
  }

getResellerAutoId(){
  this.customerService.getResellerAutoId(this.userData.customer_id).subscribe(res=>{
this.customerData=res;
this.resellerAutoId=this.customerData.id
console.log(this.resellerAutoId)
  })
}

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  errorMessage(): void {
    this.snackBar.open('Something is error!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
  addCustomer(){
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
  this.myform.value.customer_id= Math.floor(Math.random() * 90000) + 10000;
  this.userData = JSON.parse(localStorage.getItem('userData'));
  this.myform.value.created_by = this.userData.id;
  this.myform.value.reseller_id = this.resellerAutoId;
    this.customerService.addCustomer( this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['/reseller/reseller-customer/list']); 
    });

  }


}
