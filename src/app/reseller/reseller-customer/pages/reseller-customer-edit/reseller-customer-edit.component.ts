import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';

@Component({
  selector: 'app-reseller-customer-edit',
  templateUrl: './reseller-customer-edit.component.html',
  styleUrls: ['./reseller-customer-edit.component.scss']
})
export class ResellerCustomerEditComponent implements OnInit {

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
 
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  edit(id): void {
    console.log(id)
    this.customerService.getCustomerById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      name: data.name,
      email: data.email,
      phone: data.phone,
      status:data.status,
      reseller:data.reseller,
      notes:data.notes,
      billing_address: data.billing_address,
      contact_address: data.contact_address
    });
  }

  goBack(){
    this.router.navigate(['/reseller/reseller-customer/list']); 
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully updated!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
  updateCustomer(){
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
  this.userData = JSON.parse(localStorage.getItem('userData'));
  this.myform.value.updated_by = this.userData.id;
  this.myform.value.updated_time = new Date();
    this.customerService.updateCustomer(this.Id, this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['/reseller/reseller-customer/list']); 
    });
  }



}
