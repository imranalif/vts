import { Component, OnInit,ViewChild, Optional, Inject } from '@angular/core';
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
  selector: 'app-customer-device',
  templateUrl: './customer-device.component.html',
  styleUrls: ['./customer-device.component.scss']
})
export class CustomerDeviceComponent implements OnInit {
devices
  source = []
  commands
  customerDevices;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private devcieService: DeviceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<CustomerDeviceComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'identifier'];
  sms = [{ id: 1, value: 'true' }, { id: 0, value: 'false' }];


  ngOnInit(): void {
    this.getAllDevice();
    this.getDeviceByCustomer();
  }
  getAllDevice(): void {
    this.devcieService.getAllDevice().subscribe(res => {
      console.log(res)
      this.devices = res;
      this.devices.forEach(element => {
        this.source.push({ id: element.id, name: element.name, identifier: element.uniqueid })
        this.dataSource = new MatTableDataSource(this.source as any);
        setTimeout(() => (this.dataSource.sort = this.sort));
        setTimeout(() => (this.dataSource.paginator = this.paginator));
      });
    });
  }

  getDeviceByCustomer() {
    this.devcieService.getDeviceByCustomerId(this.Id).subscribe(res => {
      console.log(res);
      this.customerDevices = res;
      if (this.customerDevices.length > 0) {
        this.customerDevices.forEach(element => {
          this.source.push({ id: element.id, name: element.name, identifier: element.uniqueid })
          console.log(this.source)
          this.dataSource = new MatTableDataSource(this.source as any);
          setTimeout(() => (this.dataSource.sort = this.sort));
          setTimeout(() => (this.dataSource.paginator = this.paginator));
          this.customerDevices.push(element.id)
        });
      }
    })
  }


  // getDeviceByCustomer(){
  //   this.devcieService.getDeviceByCustomer(this.Id).subscribe(res=>{
  //     console.log(res);
  //     this.customerDevices=res;
  //     this.customerDevices.forEach(element => {
  //       this.customerDevices.push(element.device_id)
  //     });
  //   })
  // }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if (this.customerDevices) {
      return this.customerDevices.indexOf(id) > -1;
    }
  }


  check(e, data) {
    if (e) {
      this.object = { customerId: this.Id, deviceId: data.id }
      this.devcieService.addDeviceWithCustomer(this.object).subscribe()
    }
    else {
      this.object = { customerId: this.Id, deviceId: data.id }
      this.devcieService.deleteCustomerDevice(this.object).subscribe()
    }
  }



}
