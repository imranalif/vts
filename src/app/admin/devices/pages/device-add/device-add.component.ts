import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from '../../services/device.service';
import { GroupService } from 'src/app/admin/group/services/group.service';


@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {
groups=[];
show: boolean
deviceCategories:any;
  object: any = {}
  att = []
  submitted = false;
  myform: FormGroup;
  userData;

  categories = [{ id: 1, value: 'Bus' }, { id: 0, value: 'Car' }, { id: 0, value: 'Truck' }];
  nameAttributes = [{ value: 'Web: Report Color' }, { value: 'Device Password' }, { value: 'Processing: Copy' },
  { value: 'Attributes' }, { value: 'Timezone' }, { value: 'Device Inactivity Start' },
  { value: 'Device Inactivity Period' }, { value: 'Speed Limit' }, { value: 'Report Ignore' }, { value: 'Odometer' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private deviceService: DeviceService,
    private groupService:GroupService) { }

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
    this.getAllGroup();
    this.getAllDeviceCategory();
  }

  getAllGroup(){
    this.groupService.getAllGroup().subscribe(res=>{
this.groups=res;
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
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  getAllDeviceCategory(): void {
    this.deviceService.getAllDeviceCategory().subscribe(res => {
      this.deviceCategories = res;
     
    });
  }

  goBack(){
    this.router.navigate(['/admin/traccar/devices/list']);
  }

  addDevice() {
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
    var e=this.myform.value.identifier
    console.log(e.length )
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    console.log(this.myform.value);
    this.deviceService.addDevice(this.myform.value).subscribe(res => {
      if(res.message){
        console.log(res.id)
        this.show = true; 
      }
      else{
        this.openSnackBar();
        this.router.navigate(['/admin/traccar/devices/list']);
      }
      
    },
    // err => { this.show = true; }
    )
  }


}
