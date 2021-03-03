import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { MaintenanceService } from '../../services/maintenance.service';


@Component({
  selector: 'app-maintenance-device',
  templateUrl: './maintenance-device.component.html',
  styleUrls: ['./maintenance-device.component.scss']
})
export class MaintenanceDeviceComponent implements OnInit {

  maintenance
  deviceMaintenance;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private maintenanceService: MaintenanceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<MaintenanceDeviceComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'type','start','period'];

  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByDevice();
  }

  getAllDriver(): void {
    this.maintenanceService.getAllMaintenance().subscribe(res => {
      this.maintenance = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByDevice(){
    this.maintenanceService.getMaintenanceByDeviceId(this.Id).subscribe(res=>{
      console.log(res);
      this.deviceMaintenance=res;
      this.deviceMaintenance.forEach(element => {
        this.deviceMaintenance.push(element.maintenance_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.deviceMaintenance){
    return this.deviceMaintenance.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { deviceId: this.Id, maintenanceId: data.id }
      this.maintenanceService.addMaintenanceWithDevice(this.object).subscribe()
    }
    else{
      this.object = { deviceId: this.Id, maintenanceId: data.id }
      this.maintenanceService.deleteDeviceMaintenance(this.object).subscribe()
    }
  }


}
