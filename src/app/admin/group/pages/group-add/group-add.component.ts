import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GroupService } from 'src/app/admin/group/services/group.service';





@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {

  object: any = {}
  att = [];
  groups = []
  submitted = false;
  myform: FormGroup;
  userData;

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  nameTypes = [{ id: 1, value: 'TimeZone' }, { id: 2, value: 'Speed Limit' }, { id: 3, value: 'odometer' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private groupService: GroupService) { }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }


  ngOnInit(): void {
    this.myform = this.fb.group({
      groupName: ['', [Validators.required]],
      groupid: [],
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

  addGroup() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    this.myform.value.attributes.forEach(element => {
      const b = element.value
      this.object[element.name] = b;
    });
    this.myform.value.attributes = this.object;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    console.log(this.myform.value);
    this.groupService.addGroup(this.myform.value).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/group/list']);
    },
    err=>{
      console.log(err)
    }
    )
  }


}
