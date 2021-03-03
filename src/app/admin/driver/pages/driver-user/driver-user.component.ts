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
  selector: 'app-driver-user',
  templateUrl: './driver-user.component.html',
  styleUrls: ['./driver-user.component.scss']
})
export class DriverUserComponent implements OnInit {

  drivers
  userDrivers;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private driverService: DriverService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<DriverUserComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier',];

  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByUser();
  }

  getAllDriver(): void {
    this.driverService.getAllDriver().subscribe(res => {
      this.drivers = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByUser(){
    this.driverService.getDriverByUserId(this.Id).subscribe(res=>{
      console.log(res);
      this.userDrivers=res;
      this.userDrivers.forEach(element => {
        this.userDrivers.push(element.driver_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.userDrivers){
    return this.userDrivers.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { userId: this.Id, driverId: data.id }
      this.driverService.addDriverWithUser(this.object).subscribe()
    }
    else{
      this.object = { userId: this.Id, driverId: data.id }
      this.driverService.deleteUserDriver(this.object).subscribe()
    }
  }

}
