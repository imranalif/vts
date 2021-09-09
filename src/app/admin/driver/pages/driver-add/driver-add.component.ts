import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.scss']
})
export class DriverAddComponent implements OnInit {
  object: any = {}
  att = []
  submitted = false;
  myform: FormGroup;
  userData;

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
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

    //(<FormArray> this.myform.get('assigns')).push(this.assignAttributes());
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

  addDriver() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
console.log( this.myform.value.attributes)
    this.myform.value.attributes.forEach(element => {
      //const a = element.name
      const b = element.value
      this.object[element.name] = b;
      //this.object.add(`${a}, ${b}`)
      console.log(this.myform.value.attributes)
    });

    this.myform.value.attributes = this.object;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.driverService.addDriver(this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/driver/list']);
    })
  }


}
