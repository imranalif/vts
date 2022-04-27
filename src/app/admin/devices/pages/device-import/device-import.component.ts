import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-import',
  templateUrl: './device-import.component.html',
  styleUrls: ['./device-import.component.scss']
})
export class DeviceImportComponent implements OnInit {
  myform: FormGroup;
  userData
  errorInfo = []
  isLoading:boolean;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeviceImportComponent>,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private deviceService: DeviceService,
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      deviceName: ['', [Validators.required]],
      identifier: ['', [Validators.required]],
      group: [],
      phone: [''],
      model: [''],
      contact: [''],
      category: [''],
      disabled: [],
      attributes: this.fb.array([]),
    });

    this.dialogRef.disableClose = true;
  }

  close() {
    this.dialogRef.close();
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }


  importDevice() {
   
    var s={id:1};
    this.errorInfo=[]
    this.myform.markAllAsTouched();
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    var array = this.myform.value.identifier.split(',');
    array.forEach(element => { 
      this.isLoading = true;
      if (element.length != 11) {
        var obj = { id: element, status: 'Fail', reason: 'Invalid Format' };
        this.errorInfo.push(obj);
      }
      if(element.length == 11){
        this.myform.value.identifier = element;
        this.deviceService.addDevice(this.myform.value).subscribe(res => {
          if (res.message) {
            var obj = { id: res.id, status: 'Fail', reason: 'Already exits' };
            this.errorInfo.push(obj);
          }
          else { }
        })
      }
     
    });
    this.isLoading = false;
    this.dialogRef.close();
    console.log(this.errorInfo)
    this.deviceService.importDataExchange(this.errorInfo);

  }

}
