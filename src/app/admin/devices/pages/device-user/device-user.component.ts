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
  source = []
  customerDevices
  userDevices;
  Id
  user_id
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
    this.Id = data.customer_id;
    this.user_id=data.user_id;
  }
  displayedColumns = ['select', 'name', 'identifier'];
  sms = [{ id: 1, value: 'true' }, { id: 0, value: 'false' }];

  ngOnInit(): void {
    this.getAllDeviceByCustomer();
    //this.getAllDeviceByAllUser();
    this.getAllDeviceByUser();
  }

  // getAllDeviceByCustomer(): void {
  //   this.devcieService.getAllDevice().subscribe(res => {
  //     this.commands = res;
  //     this.commands.forEach(element => {
  //       this.source.push({ id: element.id, name: element.name, identifier: element.unique_id })
  //       this.dataSource = new MatTableDataSource(this.source as any);
  //       setTimeout(() => (this.dataSource.sort = this.sort));
  //       setTimeout(() => (this.dataSource.paginator = this.paginator));
  //     });
  //   });
  // }

  getAllDeviceByCustomer(): void {
    this.devcieService.getDeviceByCustomerId(this.Id).subscribe(res => {
      this.customerDevices = res;
        this.dataSource = new MatTableDataSource(this.customerDevices as any);
        setTimeout(() => (this.dataSource.sort = this.sort));
        setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDeviceByUser() {
    this.devcieService.getDeviceByUserId(this.user_id).subscribe(res => {
      this.userDevices = res;
      if (this.userDevices) {
        this.userDevices.forEach(element => {
          this.userDevices.push(element.device_id)
        });
      }
    })
  }

  getAllDeviceByAllUser() {
    this.devcieService.getDeviceByAllUser().subscribe(res => {
      console.log(res);
      this.userDevices = res;
      // this.userDevices.forEach(element => {

      //   console.log(this.source)
      //   this.userDevices.push(element.device_id)
      // });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if (this.userDevices) {
      return this.userDevices.indexOf(id) > -1;
    }
  }


  check(e, data) {
    if (e) {
      this.object = { userId: this.user_id, deviceId: data.id }
      this.devcieService.addDeviceWithUser(this.object).subscribe()
    }
    else {
      this.object = { userId: this.user_id, deviceId: data.id }
      this.devcieService.deleteUserDevice(this.object).subscribe()
    }
  }


}
