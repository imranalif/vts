import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from 'src/app/shared/services/dialog.service';
import { DeviceService } from '../../services/device.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DriverPopupComponent } from 'src/app/admin/driver/pages/driver-popup/driver-popup.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  assigedRole = []
  show = true;

  private idColumn = 'id';
  devices;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name', 'identifier',];
  constructor(private deviceService: DeviceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog,) {
    this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.getAllDevice();
  }

  getAllDevice(): void {
    this.deviceService.getAllDevice().subscribe(res => {
      this.devices = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editDevice(data): void{
    this.router.navigate(['admin/devices/edit', data.id]);
  }



  deleteDevice(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.deviceService.deleteDevice(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.devices = dataSource.data;
   const itemIndex = this.devices.findIndex(obj => obj[idColumn] === recordId);
   dataSource.data.splice(itemIndex, 1);
   dataSource.paginator = paginator;
  }


  openSnackBar(): void {
    this.snackBar.open('Deleted!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    }); }

    applyFilter(filterValue: string): void {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDriverModal() {
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(DriverPopupComponent, dialogCofig).afterClosed()
      .subscribe(response => {});
    }


}
