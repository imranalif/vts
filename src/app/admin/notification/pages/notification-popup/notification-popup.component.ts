import { Component, OnInit, ViewChild, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  notifications
  deviceNotifications;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<NotificationPopupComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  states = [{id: 0, value: 'NO' }, {id: 1, value: 'YES' }];
  displayedColumns = ['select', 'name', 'identifier','always'];

  ngOnInit(): void {
    this.getAllDriver();
    this.getAllDriverByDevice();
  }

  getAllDriver(): void {
    this.notificationService.getAllNotification().subscribe(res => {
      console.log(res);
      this.notifications = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllDriverByDevice(){
    this.notificationService.getNotificationByDeviceId(this.Id).subscribe(res=>{
      console.log(res);
      this.deviceNotifications=res;
      this.deviceNotifications.forEach(element => {
        this.deviceNotifications.push(element.notification_id)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.deviceNotifications){
    return this.deviceNotifications.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { deviceId: this.Id, notificationId: data.id }
      this.notificationService.addNotificationWithDevice(this.object).subscribe()
    }
    else{
      this.object = { deviceId: this.Id, notificationId: data.id }
      this.notificationService.deleteDeviceNotification(this.object).subscribe()
    }
  }

}
