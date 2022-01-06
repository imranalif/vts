import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-import',
  templateUrl: './customer-import.component.html',
  styleUrls: ['./customer-import.component.scss']
})
export class CustomerImportComponent implements OnInit {
  myform: FormGroup;
  Id
  errorInfo = []
  userData
  isLoading: boolean;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private dialogRef: MatDialogRef<CustomerImportComponent>,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.Id = data.id
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      customerId: ['', [Validators.required]]
    });

    this.dialogRef.disableClose = true;
  }


  close() {
    this.dialogRef.close();
  }

  importCustomer() {
    this.errorInfo = [];
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    var array = this.myform.value.customerId.split(',');
    array.forEach(element => {
      this.isLoading = true;
      //if(element.length == 11){
      this.myform.value.customerId = element;
      this.myform.value.reseller_id = this.Id;
      this.customerService.addCustomerWithReseller(this.myform.value).subscribe(res => {
        if (res.message) {
          var obj = { id: res.id, status: 'Fail', reason: res.message.reason };
          this.errorInfo.push(obj);
        }
        else {
          var ob = { id: element, status: 'Successful', reason: '' };
          this.errorInfo.push(ob);
        }
      })
      //}

    }
    );
    this.isLoading = false;
    this.dialogRef.close();
    if (this.errorInfo) {
      console.log(this.errorInfo)
      this.customerService.importDataExchange(this.errorInfo);
    }
  }

}
