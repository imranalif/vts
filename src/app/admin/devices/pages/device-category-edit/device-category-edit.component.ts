import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-category-edit',
  templateUrl: './device-category-edit.component.html',
  styleUrls: ['./device-category-edit.component.scss']
})
export class DeviceCategoryEditComponent implements OnInit {
  Id:any;
  createdBy: any;
  submitted = false;
  myform: FormGroup;
  userData:any;
  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private deviceService: DeviceService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      title: ['', [Validators.required]],
      icon: ['', [Validators.required]],
      status: [ ,[Validators.required]],
    });

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }


  edit(id): void {
    this.deviceService.getDeviceCategoryById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      title: data.title,
      icon: data.icon,
      status: data.status
    });
    this.createdBy = data.created_by;
    console.log(this.createdBy);
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  goBack(){
    this.router.navigate(['/admin/traccar/devices/dcat-list']);
  }

  updateDeviceCategory(): void{
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
   
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    this.myform.value.created_by = this.createdBy;
    console.log(this.myform.value);
    this.deviceService.updateDeviceCategory(this.Id, this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/devices/dcat-list']); 
    });
  }

}
