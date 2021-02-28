import { Component, OnInit,ViewChild } from '@angular/core';
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
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private driverService: DriverService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<DriverPopupComponent>,
    private dialog: MatDialog) { }
    displayedColumns = [ 'name', 'identifier',];
  ngOnInit(): void {
    this.getAllDriver();
  }

  getAllDriver(): void {
    this.driverService.getAllDriver().subscribe(res => {
      this.drivers = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  close() {
    this.dialogRef.close();
  }

}
