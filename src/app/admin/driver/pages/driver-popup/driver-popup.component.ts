import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriverService } from '../../services/driver.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";

@Component({
  selector: 'app-driver-popup',
  templateUrl: './driver-popup.component.html',
  styleUrls: ['./driver-popup.component.scss']
})
export class DriverPopupComponent implements OnInit {
  drivers
  deviceDrivers;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private driverService: DriverService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<DriverPopupComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier',];
  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByDevice();
  }

  getAllDriver(): void {
    this.driverService.getAllDriver().subscribe(res => {
      this.drivers = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByDevice(){
    this.driverService.getDriverByDeviceId(this.Id).subscribe(res=>{
      console.log(res);
      this.deviceDrivers=res;
      this.deviceDrivers.forEach(element => {
        this.deviceDrivers.push(element.driver_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.deviceDrivers){
    return this.deviceDrivers.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { deviceId: this.Id, driverId: data.id }
      this.driverService.addDriverWithDevice(this.object).subscribe()
    }
    else{
      this.object = { deviceId: this.Id, driverId: data.id }
      this.driverService.deleteDeviceDriver(this.object).subscribe()
    }
  }

}
