import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from '../../services/device.service';
import { GroupService } from 'src/app/admin/group/services/group.service';


@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {

  d
  attr
  groups=[]
  Id: string;
  object: any = {}
  att = []
  submitted = false;
  myform: FormGroup;
  createdBy
  userData;
  array = [
    { "id": 1, name: "speed", value: "25" },
    { "id": 2, name: "limit", value: "5" }]

    categories = [{ id: 1, value: 'Bus' }, { id: 0, value: 'Car' }, { id: 0, value: 'Truck' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private groupService: GroupService) { }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }



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
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
    this.getAllGroup();
  }

  getAllGroup(){
    this.groupService.getAllGroup().subscribe(res=>{
this.groups=res;
    })
  }


  edit(id): void {
    this.deviceService.getDeviceById(id).subscribe(data => {
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
      deviceName: data.name,
      identifier: data.uniqueid,
      group: data.groupid,
      phone: data.phone,
      model: data.model,
      contact: data.contact,
      category: data.category,
      disabled: data.disabled,
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

  updateDevice() {
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
    this.deviceService.updateDevice(this.Id,this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/devices/list']);
    })
  }



}
