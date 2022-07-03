import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { GeofenceService } from 'src/app/admin/geofences/services/geofence.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';
import { CusmapService } from '../../services/cusmap.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  geofences;
  devices;

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  types = [{ id: 1, value: 'General Information' }, { id: 0, value: 'Drives and Stops' },{ id: 2, value: 'Overspeed' }, { id: 3, value: 'Speed Report' },{ id: 4, value: 'Geofences' }, { id: 5, value: 'Events' }, { id: 6, value: 'Ignition On/Off' }];
  formates = [{ id: 1, value: 'HTML' }, { id: 0, value: 'CSV' }, { id: 0, value: 'PDF' }];
  periods = [{ id: 1, value: 'Today' }, { id: 0, value: 'Yesterday' },{ id: 2, value: 'This week' }, { id: 3, value: 'This month' }];
  public selectedType=1;
  public selectedFormat=1;
  public selectedDay=1;
  constructor(
    private dialogRef: MatDialogRef<ReportComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private geofenceService: GeofenceService,
    private dateFormatService: DateformateService,
    private cusmapService: CusmapService,
  ) { }

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      title: [''],
      type: [''],
      format: [''],
      period: [''],
      devices: [''],
      geofences: [''],
      sendEmail: [''],
      speedLimit: [''],
      from_date: [''],
      to_date: [''],
      stops: [''],
    });

    this.getAllGeofence();

    setTimeout(() => {
      const today = new Date
      var requiredDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())

      this.reportForm.patchValue(
        {
          //id:3,
          from_date: requiredDate,
          to_date: new Date()
        })
    }, 100);


    this.cusmapService.customerDeviceCatch.subscribe(res=>{
      if (res){
        this.devices=res;
      }
    })


  }

  public close(): void {
    this.dialogRef.close();
  }

  public generateReport():void{

  }

  public getAllGeofence(): void{
    this.geofenceService.getAllGeofence().subscribe(res => {
      this.geofences = res;
    })
  }

}
