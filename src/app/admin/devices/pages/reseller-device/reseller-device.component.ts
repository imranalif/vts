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
import { CustomerService } from 'src/app/admin/customer/services/customer.service';

@Component({
  selector: 'app-reseller-device',
  templateUrl: './reseller-device.component.html',
  styleUrls: ['./reseller-device.component.scss']
})
export class ResellerDeviceComponent implements OnInit {
customerData
  devices
  resellerCustomerDevices
  source = []
  commands
  customerDevices;
  Id
  customerId
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private devcieService: DeviceService,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<ResellerDeviceComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.id,
this.customerId=data.customer_id
  }
  displayedColumns = ['select', 'name', 'identifier'];

  ngOnInit(): void {
    this.getCustomerResellerDevice();
    this.getDeviceByReseller();
  
  }

  getDeviceByReseller() {
    console.log(this.Id)
    // this.customerService.getCustomerIdByAutoId(this.Id).subscribe(response=>{
    //  this.customerData=response
      this.devcieService.getDeviceByResellerId(this.Id).subscribe(res => {
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
    // })
  
  }

  getCustomerResellerDevice(){
    this.devcieService.getDeviceByCustomerId(this.customerId).subscribe(response=>{
      console.log(response)
      this.resellerCustomerDevices=response
      if (this.resellerCustomerDevices.length > 0) {
        this.resellerCustomerDevices.forEach(element => {
           this.source.push({ id: element.id, name: element.name, identifier: element.uniqueid })
          // console.log(this.source)
           this.dataSource = new MatTableDataSource(this.source as any);
          // setTimeout(() => (this.dataSource.sort = this.sort));
          // setTimeout(() => (this.dataSource.paginator = this.paginator));
          this.resellerCustomerDevices.push(element.id)
        });
      }
      
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if (this.resellerCustomerDevices) {
      return this.resellerCustomerDevices.indexOf(id) > -1;
    }
    return
  }


  check(e, data) {
    if (e) {
      this.object = { customerId: this.customerId, deviceId: data.id }
      this.devcieService.addDeviceWithCustomerReseller(this.object).subscribe()
    }
    else {
      this.object = { customerId: this.customerId, deviceId: data.id }
      this.devcieService.deleteCustomerDeviceReseller(this.object).subscribe()
    }
}

}
