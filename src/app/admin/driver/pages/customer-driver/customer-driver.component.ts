import { Component, OnInit,ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-customer-driver',
  templateUrl: './customer-driver.component.html',
  styleUrls: ['./customer-driver.component.scss']
})
export class CustomerDriverComponent implements OnInit {

  drivers
  source = []
  commands
  customerDrivers;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['select', 'name', 'identifier'];
  constructor(private driverService: DriverService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<CustomerDriverComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }

  ngOnInit(): void {
    this.getDriveByCustomer();
    this.getAllCustomerDriver();
    
  }

  getAllCustomerDriver(): void {
    this.driverService.getAllCustomerDriver().subscribe(res => {
      console.log(res)
      this.drivers = res;
      this.drivers.forEach(element => {
        this.source.push({ id: element.id, name: element.name, identifier: element.uniqueid })
        this.dataSource = new MatTableDataSource(this.source as any);
      
        setTimeout(() => (this.dataSource.sort = this.sort));
        setTimeout(() => (this.dataSource.paginator = this.paginator));
      });
    });
  }


  getDriveByCustomer() {
    this.driverService.getDriverByCustomerId(this.Id).subscribe(res => {
      console.log(res);
      this.customerDrivers = res;
      if (this.customerDrivers.length > 0) {
        this.customerDrivers.forEach(element => {
          this.source.push({ id: element.id, name: element.name, identifier: element.uniqueid })
          console.log(this.source)
          this.dataSource = new MatTableDataSource(this.source as any);
          setTimeout(() => (this.dataSource.sort = this.sort));
          setTimeout(() => (this.dataSource.paginator = this.paginator));
          this.customerDrivers.push(element.id)
        });
      }
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if (this.customerDrivers) {
      return this.customerDrivers.indexOf(id) > -1;
    }
  }


  check(e, data) {
    if (e) {
      this.object = { customerId: this.Id, driverId: data.id }
      this.driverService.addDriverWithCustomer(this.object).subscribe()
    }
    else {
      this.object = { customerId: this.Id, driverId: data.id }
      this.driverService.deleteCustomerDriver(this.object).subscribe()
    }
  }


}
