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
  selector: 'app-notification-user',
  templateUrl: './notification-user.component.html',
  styleUrls: ['./notification-user.component.scss']
})
export class NotificationUserComponent implements OnInit {

  notifications
  userNotifications;
  Id
  object
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<NotificationUserComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Id = data.pageValue
  }
  states = [{id: 0, value: 'NO' }, {id: 1, value: 'YES' }];
  displayedColumns = ['select', 'name', 'identifier','always'];

  ngOnInit(): void {
    this.getAllNotification();
    this.getAllNotificationByUser();
  }

  getAllNotification(): void {
    this.notificationService.getAllNotification().subscribe(res => {
      console.log(res);
      this.notifications = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getAllNotificationByUser(){
    this.notificationService.getNotificationByUserId(this.Id).subscribe(res=>{
      console.log(res);
      this.userNotifications=res;
      this.userNotifications.forEach(element => {
        this.userNotifications.push(element.notificationid)
      });
    })
  }

  close() {
    this.dialogRef.close();
  }

  public checkState(id: string): boolean {
    if(this.userNotifications){
    return this.userNotifications.indexOf(id) > -1;}
  }


  check(e, data) {
    if (e) {
      this.object = { userId: this.Id, notificationId: data.id }
      this.notificationService.addNotificationWithUser(this.object).subscribe()
    }
    else{
      this.object = { userId: this.Id, notificationId: data.id }
      this.notificationService.deleteUserNotification(this.object).subscribe()
    }
  }


}
