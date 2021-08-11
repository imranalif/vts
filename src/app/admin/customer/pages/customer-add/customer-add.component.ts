import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  myform: FormGroup;
  Id
  userData;
  submitted = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private customerService:CustomerService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customer_id:[],
      name: ['', [Validators.required]],
      email: [''],
      phone: [''],
      billing_address: [ '',[Validators.required]],
      contact_address: ['' ,[Validators.required]]
    });
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
    this.customerService.addCustomer( this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['/admin/customer/list']); 
    });

  }

}
