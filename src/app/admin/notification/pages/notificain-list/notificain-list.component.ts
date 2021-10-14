import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from 'src/app/shared/services/dialog.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notificain-list',
  templateUrl: './notificain-list.component.html',
  styleUrls: ['./notificain-list.component.scss']
})
export class NotificainListComponent implements OnInit {

  assigedRole = []
  show = true;

  private idColumn = 'id';
  notifications;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'type', 'channel',];
  constructor(private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService) {
    this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.getAllNotification();
  }

  getAllNotification(): void {
    this.notificationService.getAllNotification().subscribe(res => {
      this.notifications = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editNotification(data): void{
    this.router.navigate(['admin/traccar/notification/edit', data.id]);
  }



  deleteNotification(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.notificationService.deleteNotification(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.notifications = dataSource.data;
   const itemIndex = this.notifications.findIndex(obj => obj[idColumn] === recordId);
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

    goAddItem(){
      this.router.navigate(['admin/traccar/notification/add']);
    }

}
