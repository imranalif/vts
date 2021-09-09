import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaintenanceService } from 'src/app/admin/maintenance/services/maintenance.service';

@Component({
  selector: 'app-maintenance-add',
  templateUrl: './maintenance-add.component.html',
  styleUrls: ['./maintenance-add.component.scss']
})
export class MaintenanceAddComponent implements OnInit {

  object: any = {}
  att = [];
  groups = []
  submitted = false;
  myform: FormGroup;
  userData;

  types = [{ id: 1, value: 'Engine On' }, { id: 0, value: 'Arm Alarm' },{ id: 2, value: 'TimeZone' }];
  nameTypes = [{ id: 1, value: 'TimeZone' }, { id: 2, value: 'Speed Limit' }, { id: 3, value: 'odometer' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private maintenanceService: MaintenanceService) { }

    step = 0;
  setStep(index: number) {
    this.step = index;
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      mname: ['', [Validators.required]],
      start: ['', [Validators.required]],
      type: ['', [Validators.required]],
      period: ['', [Validators.required]],
      attributes: this.fb.array([]),
    });
  }

  assignAttributes() {
    return this.fb.group({
      name: [''],
      value: ['']
    });
  }

  get fArray() {
    return this.myform.get('attributes') as FormArray
  }

  addassignAttributes() {
    this.fArray.push(this.assignAttributes())
  }

  removeAttributes(index) {
    (<FormArray>this.myform.get('attributes')).removeAt(index);
  }


  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addMaintenance() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }

    if(this.myform.value.attributes){
      this.myform.value.attributes.forEach(element => {
        const b = element.value
        this.object[element.name] = b;
      });}
  
      this.myform.value.attributes = this.object;

    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    console.log(this.myform.value);
    this.maintenanceService.addMaintenance(this.myform.value).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/maintenance/list']);
    },
    err=>{
      console.log(err)
    }
    )
  }



}
