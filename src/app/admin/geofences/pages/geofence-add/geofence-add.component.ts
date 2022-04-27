import { Component, OnInit,OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GeofenceMapComponent } from '../geofence-map/geofence-map.component';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { GeofenceService } from '../../services/geofence.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-geofence-add',
  templateUrl: './geofence-add.component.html',
  styleUrls: ['./geofence-add.component.scss']
})
export class GeofenceAddComponent implements OnInit, OnDestroy {
  myform: FormGroup;
  public str: string
  private sub: Subscription;
  public  object: any = {}
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
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
      calender: [],
      attributes: this.fb.array([]),
    });
    this.geofenceService.geofenceDataCatch.subscribe(res=>{
this.str=res;
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

 public openGeofenceModal(): void {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "800px";
    dialogCofig.height = "580px";

    this.dialog.open(GeofenceMapComponent, {
      width: '800px',
      height: '580px',
     
    }).afterClosed()
      .subscribe(response => { });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

 public addGeofence(): void{
this.myform.value.area=this.str;
this.myform.value.attributes = this.object;
this.sub=this.geofenceService.addGeofence(this.myform.value).subscribe(res=>{
  this.openSnackBar();
  this.router.navigate(['/admin/traccar/geofences/list']);
})
  }

  public goBack(): void{
    this.router.navigate(['/admin/traccar/geofences/list']);
  }

  ngOnDestroy():void{
//this.sub.unsubscribe();
  }

}
