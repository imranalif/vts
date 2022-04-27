import { Component, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GeofenceMapComponent } from '../geofence-map/geofence-map.component';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { GeofenceService } from '../../services/geofence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GeofenceMapEditComponent } from '../geofence-map-edit/geofence-map-edit.component';

@Component({
  selector: 'app-geofence-edit',
  templateUrl: './geofence-edit.component.html',
  styleUrls: ['./geofence-edit.component.scss']
})
export class GeofenceEditComponent implements OnInit {
  public Id: string;
  d
  createdBy;
  attr
  myform: FormGroup;
  public str: string
  private sub: Subscription;
  public  object: any = {}
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private geofenceService: GeofenceService
  ) { }

  public step : number = 0;
  setStep(index: number) {
    this.step = index;
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      deviceName: ['', [Validators.required]],
      area: [''],
      description: [''],
      calender: [''],
      attributes: this.fb.array([]),
    });
    this.geofenceService.geofenceDataCatch.subscribe(res=>{
this.str=res;
console.log(this.str);
    })

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  edit(id): void {
    this.geofenceService.getGeofenceById(id).subscribe(data => {
      this.d = data;
      console.log(this.d);
      this.geofenceService.geofenceEditDataExchange(this.d.area);
      console.log(this.d.area);
      var dAttr = JSON.parse(this.d.attributes);
      var myArrayEntries = Object.entries(dAttr);
      this.attr = [];
      myArrayEntries.forEach(key => {
        var tmpAttr = { name: key[0], value: key[1] };
        this.attr.push(tmpAttr);
      });
      this.d.attributes = this.attr;
      this.setData(this.d);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      deviceName: data.name,
      area: data.area,
      description: data.description,
      calender: data.calendarid,
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

 public openGeofenceModal(): void {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "800px";
    dialogCofig.height = "580px";

    this.dialog.open(GeofenceMapEditComponent, {
      width: '800px',
      height: '580px',
     
    }).afterClosed()
      .subscribe(response => { });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully updated!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  public goBack(): void{
    this.router.navigate(['/admin/traccar/geofences/list']);
  }

 public  editGeofence(): void{
  this.myform.value.area=this.str;
  this.myform.value.attributes = this.object;
  this.myform.value.name = this.myform.value.deviceName;
  this.sub=this.geofenceService.updateGeofence(this.Id,this.myform.value).subscribe(res=>{
    this.openSnackBar();
    this.router.navigate(['/admin/traccar/geofences/list']);
  })
  }

}
