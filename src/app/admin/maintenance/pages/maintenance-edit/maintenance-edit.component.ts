import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaintenanceService } from 'src/app/admin/maintenance/services/maintenance.service';

@Component({
  selector: 'app-maintenance-edit',
  templateUrl: './maintenance-edit.component.html',
  styleUrls: ['./maintenance-edit.component.scss']
})
export class MaintenanceEditComponent implements OnInit {
  createdBy
  d
  attr
  groups = []
  Id: string;
  object: any = {}
  att = [];
  submitted = false;
  myform: FormGroup;
  userData;

  types = [{ id: 1, value: 'Engine On' }, { id: 0, value: 'Arm Alarm' }, { id: 2, value: 'TimeZone' }];
  nameTypes = [{ id: 1, value: 'TimeZone' }, { id: 2, value: 'Speed Limit' }, { id: 3, value: 'odometer' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private maintenanceService: MaintenanceService,
    private route: ActivatedRoute) { }

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
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
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

  edit(id): void {
    this.maintenanceService.getMaintenanceById(id).subscribe(data => {
      this.d = data
      console.log(this.d);
      var dAttr = JSON.parse(this.d.attributes);
      var myArrayEntries = Object.entries(dAttr);
      this.attr = [];
      myArrayEntries.forEach(key => {
        var tmpAttr = { name: key[0], value: key[1] };
        this.attr.push(tmpAttr);
      });
      this.d.attributes = this.attr;
      console.log(this.d.attributes);
      this.setData(this.d);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      mname: data.name,
      start: data.start,
      type: data.type,
      period: data.period,
    });
    this.createdBy = data.created_by;
    this.setAttributes();
  }

  setAttributes() {
    let control = <FormArray>this.myform.controls.attributes;
    this.d.attributes.forEach(x => {
      control.push(this.fb.group(x));
    })
  }

  openSnackBar(): void {
    this.snackBar.open('Updated added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  updateMaintenance() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    this.myform.value.attributes.forEach(element => {
      const b = element.value
      this.object[element.name] = b;
      console.log(this.myform.value.attributes)
    });
    this.myform.value.attributes = this.object;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.created_by = this.createdBy;
    this.myform.value.updated_time = new Date();
    console.log(this.myform.value)
    this.maintenanceService.updateMaintenance(this.Id, this.myform.value).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/maintenance/list']);
    })
  }




}
