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
  selector: 'app-driver-group',
  templateUrl: './driver-group.component.html',
  styleUrls: ['./driver-group.component.scss']
})
export class DriverGroupComponent implements OnInit {

  drivers
  groupDrivers;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private driverService: DriverService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<DriverGroupComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier',];

  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByGroup();
  }

  getAllDriver(): void {
    this.driverService.getAllDriver().subscribe(res => {
      this.drivers = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByGroup(){
    this.driverService.getDriverByGroupId(this.Id).subscribe(res=>{
      console.log(res);
      this.groupDrivers=res;
      this.groupDrivers.forEach(element => {
        this.groupDrivers.push(element.driverid)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.groupDrivers){
    return this.groupDrivers.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { groupId: this.Id, driverId: data.id }
      this.driverService.addDriverWithGroup(this.object).subscribe()
    }
    else{
      this.object = { groupId: this.Id, driverId: data.id }
      this.driverService.deleteGroupDriver(this.object).subscribe()
    }
  }

}
