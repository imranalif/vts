import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/admin/notification/services/notification.service';

@Component({
  selector: 'app-notificain-edit',
  templateUrl: './notificain-edit.component.html',
  styleUrls: ['./notificain-edit.component.scss']
})
export class NotificainEditComponent implements OnInit {
  createdBy
  d
  attr
  groups=[]
  Id: string;
  object: any = {}
  att = [];
  submitted = false;
  myform: FormGroup;
  userData;

  channels = [{ id: 1, value: 'Web' }, { id: 0, value: 'Mail' }];
  types = [{ id: 1, value: 'Status Online' }, { id: 2, value: 'Status Offline' }, { id: 3, value: 'Ignition Off' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService,
    private route:ActivatedRoute) { }

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
    this.notificationService.getNotificationById(id).subscribe(data => {
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
      type: data.type,
      all_devices: data.always,
      channels: data.notificators,
      calender: data.calenderid,
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

  openSnackBar(): void {
    this.snackBar.open('Updated added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  updateNotification() {
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
    this.notificationService.updateNotification(this.Id,this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/notification/list']);
    })
  }

  


}
