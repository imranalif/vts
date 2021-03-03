import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { DeviceService } from '../../services/device.service';


@Component({
  selector: 'app-device-user',
  templateUrl: './device-user.component.html',
  styleUrls: ['./device-user.component.scss']
})
export class DeviceUserComponent implements OnInit {

  commands
  userDevices;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private devcieService: DeviceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<DeviceUserComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier'];
  sms = [{ id: 1, value: 'true' }, { id: 0, value: 'false' }];

  ngOnInit(): void {
    this.getAllDevice();
    this.getAllDeviceByUser();
  }

  getAllDevice(): void {
    this.devcieService.getAllDevice().subscribe(res => {
      this.commands = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDeviceByUser(){
    this.devcieService.getDeviceByUserId(this.Id).subscribe(res=>{
      console.log(res);
      this.userDevices=res;
      this.userDevices.forEach(element => {
        this.userDevices.push(element.device_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.userDevices){
    return this.userDevices.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { userId: this.Id, deviceId: data.id }
      this.devcieService.addDeviceWithUser(this.object).subscribe()
    }
    else{
      this.object = { userId: this.Id, deviceId: data.id }
      this.devcieService.deleteUserDevice(this.object).subscribe()
    }
  }


}
