import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';
import { DeviceService } from 'src/app/admin/devices/services/device.service';

@Component({
  selector: 'app-reseller-device',
  templateUrl: './reseller-device.component.html',
  styleUrls: ['./reseller-device.component.scss']
})
export class ResellerDeviceComponent implements OnInit {

  myform: FormGroup;
  Id
  customer_id
  reseller_id
  reseller
  cutomerIdData
  deviceData
  successErrorInfo = []
  userData
  isLoading: boolean;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private deviceService: DeviceService,
    private dialogRef: MatDialogRef<ResellerDeviceComponent>,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.reseller_id = data.id,
      this.customer_id = data.customer_id,
      this.reseller = data.reseller
  }

  //import device for customer

  ngOnInit(): void {
    this.myform = this.fb.group({
      // customer_id: ['', [Validators.required]],
      imei: ['', [Validators.required]]
    });

    this.dialogRef.disableClose = true;
  }

  close() {
    this.dialogRef.close();
  }

  importResellerDevice() {
    this.successErrorInfo = [];
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    // this.customerService.getCustomerById(this.myform.value.customer_id).subscribe(r=>{
    //   this.cutomerIdData=r;
    //   this.myform.value.reseller_id=this.cutomerIdData.id
    // })
    var array = this.myform.value.imei.split(',');
    array.forEach(element => {
      this.isLoading = true;
      this.deviceService.getDeviceIdByIMEI(element).subscribe(res => {
        console.log(res)
        if (!res) {
          var obj = { id: element, status: 'Failed', reason: 'Not Valid' };
          this.successErrorInfo.push(obj);
        }
        else {

          this.deviceData = res;
          if (this.deviceData.reseller_id == 0 && this.deviceData.assign_customer_id == 0) {
            this.myform.value.deviceId = this.deviceData.id;
            /*-----------Reseller part------------*/
            if (this.reseller == 1) {
              console.log('reseller device testing')
              this.myform.value.reseller_id = this.reseller_id
              this.deviceService.addDeviceWithReseller(this.myform.value).subscribe(res => {
                if (res.message) {
                  var obj = { id: element, status: res.message.status, reason: res.message.reason };
                  this.successErrorInfo.push(obj);
                  console.log(this.successErrorInfo.length)
                }
                // else {
                //   var ob = { id: element, status: 'Successful', reason: '' };
                //   this.successErrorInfo.push(ob);
                // }
              })
            }

            /*-----------Customer part------------*/
            else {
              this.myform.value.customerId = this.customer_id
              this.deviceService.addDeviceWithCustomerByImport(this.myform.value).subscribe(res => {
                if (res.message) {
                  var obj = { id: element, status: res.message.status, reason: res.message.reason };
                  this.successErrorInfo.push(obj);
                  console.log(this.successErrorInfo.length)
                }

              })
            }

          }
          else {
            var obj = { id: element, status: 'Failed', reason: 'Already Assaigned' };
            this.successErrorInfo.push(obj);
          }
        }
      },
        // err=>{
        //   console.log('error testing')
        //   var obj = { id: element, status: 'Failed', reason: 'Not Valid' };
        // this.successErrorInfo.push(obj);
        // }
      )



      //}

    }
    );

    setTimeout(() => {                           // <<<---using ()=> syntax
      this.isLoading = false;
      this.dialogRef.close();
      if (this.successErrorInfo) {
        console.log(this.successErrorInfo)
        this.customerService.deviceImportStatusExchange(this.successErrorInfo);
      }
    }, 1000);
  }

}
