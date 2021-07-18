import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/admin/notification/services/notification.service';


@Component({
  selector: 'app-notificain-add',
  templateUrl: './notificain-add.component.html',
  styleUrls: ['./notificain-add.component.scss']
})
export class NotificainAddComponent implements OnInit {

  object: any = {}
  att = [];
  groups = []
  submitted = false;
  myform: FormGroup;
  userData;

  channels = [{ id: 1, value: 'Web' }, { id: 0, value: 'Mail' }];
  types = [{ id: 1, value: 'Status Online' }, { id: 2, value: 'Status Offline' }, { id: 3, value: 'Ignition Off' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService) { }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      type: ['', [Validators.required]],
      all_devices: [],
      channels: [''],
      calender:[],
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
    this.notificationService.addNotification(this.myform.value).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/notification/list']);
    },
    err=>{
      console.log(err)
    }
    )
  }


}
