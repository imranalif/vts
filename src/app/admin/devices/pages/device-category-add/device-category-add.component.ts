import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-category-add',
  templateUrl: './device-category-add.component.html',
  styleUrls: ['./device-category-add.component.scss']
})
export class DeviceCategoryAddComponent implements OnInit {
  submitted = false;
  myform: FormGroup;
  userData:any;
  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private deviceService: DeviceService,
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      title: ['', [Validators.required]],
      icon: ['', [Validators.required]],
      status: [ ,[Validators.required]],
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

  goBack(){
    this.router.navigate(['/admin/traccar/devices/dcat-list']);
  }
  
  addDeviceCategory(){
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      console.log("rrrr")
      return;
  }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.deviceService.addDeviceCategory(this.myform.value).subscribe(res=>{
      console.log(res)
      if(res.Success=="Done"){
        console.log(res)
        this.openSnackBar();
        this.router.navigate(['/admin/traccar/devices/dcat-list']);
      }
     else
     {
        console.log(res)
        this.errorMessage();
      }
     
    },
    
    )
  }

}
