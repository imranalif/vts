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
  selector: 'app-maintenance-user',
  templateUrl: './maintenance-user.component.html',
  styleUrls: ['./maintenance-user.component.scss']
})
export class MaintenanceUserComponent implements OnInit {

  maintenance
  userMaintenance;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private maintenanceService: MaintenanceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<MaintenanceUserComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  displayedColumns = ['select', 'name', 'type','start','period'];

  ngOnInit(): void {
    this.getAllMaintenance();
    this.getAllMaintenanceByUser();
  }

  getAllMaintenance(): void {
    this.maintenanceService.getAllMaintenance().subscribe(res => {
      this.maintenance = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllMaintenanceByUser(){
    this.maintenanceService.getMaintenanceByUserId(this.Id).subscribe(res=>{
      console.log(res);
      this.userMaintenance=res;
      this.userMaintenance.forEach(element => {
        this.userMaintenance.push(element.maintenance_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.userMaintenance){
    return this.userMaintenance.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { userId: this.Id, maintenanceId: data.id }
      this.maintenanceService.addMaintenanceWithUser(this.object).subscribe()
    }
    else{
      this.object = { userId: this.Id, maintenanceId: data.id }
      this.maintenanceService.deleteUserMaintenance(this.object).subscribe()
    }
  }


}
