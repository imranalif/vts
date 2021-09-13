import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit {
  d
  createdBy;
  attr
  drivers
  Id: string;
  object: any = {}
  att = []
  submitted = false;
  myform: FormGroup;
  userData;
  array = [
    { "id": 1, name: "speed", value: "25" },
    { "id": 2, name: "limit", value: "5" }]

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private driverService: DriverService) { }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }



  ngOnInit(): void {
    this.myform = this.fb.group({
      driverName: ['', [Validators.required]],
      identifier: ['', [Validators.required]],
      driving_license: ['', [Validators.required]],
      phone: [''],
      email: [''],
      fatherName: [''],
      motherName: [''],
      presentAddress: [''],
      permanentAddress: [''],
      nid: [''],
      attributes: this.fb.array([]),
    });
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
    this.getAllDriver();
  }

  getAllDriver(): void {
    this.driverService.getAllDriver().subscribe(res => {
      this.drivers = res;
      console.log(this.drivers)
    });
  }

  edit(id): void {
    this.driverService.getDriverById(id).subscribe(data => {
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
      driverName: data.name,
      identifier: data.uniqueid,
      driving_license: data.driving_license,
      phone: data.phone,
      email: data.email,
      fatherName: data.father_name,
      motherName: data.mother_name,
      presentAddress: data.present_address,
      permanentAddress: data.permanent_address,
      nid: data.nid,
    });
    this.createdBy=data.created_by;
    this.setAttributes();
  }

  setAttributes() {
    let control = <FormArray>this.myform.controls.attributes;
    this.d.attributes.forEach(x => {
      control.push(this.fb.group(x));
    })
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
    this.snackBar.open('Updated added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  goBack(){
    this.router.navigate(['/admin/traccar/driver/list']);
  }

  updateDriver() {
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
    this.driverService.updateDriver(this.Id,this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/driver/list']);
    })
  }

}
