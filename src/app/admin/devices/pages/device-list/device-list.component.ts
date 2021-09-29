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
import { NotificationPopupComponent } from 'src/app/admin/notification/pages/notification-popup/notification-popup.component';
import { MaintenanceDeviceComponent } from 'src/app/admin/maintenance/pages/maintenance-device/maintenance-device.component';
import { AttributeDeviceComponent } from 'src/app/admin/attributes/pages/attribute-device/attribute-device.component';
import { CommandDeviceComponent } from 'src/app/admin/commands/pages/command-device/command-device.component';
import { DeviceImportComponent } from '../device-import/device-import.component';
import { ImportErrorComponent } from '../import-error/import-error.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
errorData;
  assigedRole = []
  show = true;
  isLoading = true;
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

    this.deviceService.importDataCatch.subscribe(res => {
      console.log(res)
      if (res) {
        this.errorData=res;
        this.deviceService.importErrorExchange(res);
        this.isLoading = true;
        setTimeout(() => {
          this.getAllDevice();
        }, 1000);
        setTimeout(() => {
          this.openImportErrorModal();
        }, 1500);
        
        
      }
    })

    this.deviceService.importErrorCatch.subscribe(res=>{
      if(res){
        //this.openImportErrorModal();
      }
    })
  }

  getAllDevice(): void {
    this.deviceService.getAllDevices().subscribe(res => {
      this.isLoading = false;
      this.devices = res;
      console.log(this.devices)
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
      

    });
  }

  editDevice(data): void{
    this.router.navigate(['admin/traccar/devices/edit', data.id]);
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

    openDriverModal(data) {
      console.log(data.id)
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(DriverPopupComponent,  {
        width: '580px',
        height: '460px',
        data: { pageValue: data.id }
      }).afterClosed()
      .subscribe(response => {});
    }

    openNotificationModal(data) {
      console.log(data.id)
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(NotificationPopupComponent,  {
        width: '580px',
        height: '460px',
        data: { pageValue: data.id }
      }).afterClosed()
      .subscribe(response => {});
    }

    openMaintenanceModal(data) {
      console.log(data.id)
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(MaintenanceDeviceComponent,  {
        width: '580px',
        height: '460px',
        data: { pageValue: data.id }
      }).afterClosed()
      .subscribe(response => {});
    }

    openAttributeModal(data) {
      console.log(data.id)
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(AttributeDeviceComponent,  {
        width: '580px',
        height: '460px',
        data: { pageValue: data.id }
      }).afterClosed()
      .subscribe(response => {});
    }

    openCommandModal(data) {
      console.log(data.id)
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(CommandDeviceComponent,  {
        width: '580px',
        height: '460px',
        data: { pageValue: data.id }
      }).afterClosed()
      .subscribe(response => {});
    }

    openImportModal() {
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(DeviceImportComponent,  {
        width: '580px',
        height: '460px',
      }).afterClosed()
      .subscribe(response => {});
    }

    openImportErrorModal() {
      const dialogCofig = new MatDialogConfig();
      dialogCofig.disableClose = true;
      dialogCofig.width = "600px";
      dialogCofig.height = "480px";
    
      this.dialog.open(ImportErrorComponent,  {
        width: '580px',
        height: '260px',
        data: this.errorData
      }).afterClosed()
      .subscribe(response => {});
    }


    settingDevice(data){
   console.log(data.id)
    }

    goAddItem(){
      this.router.navigate(['admin/traccar/devices/add']);
    }


}
