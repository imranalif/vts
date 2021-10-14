import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GroupService } from '../../services/group.service';
import { DriverGroupComponent } from 'src/app/admin/driver/pages/driver-group/driver-group.component';
import { NotificationGroupComponent } from 'src/app/admin/notification/pages/notification-group/notification-group.component';
import { MaintenanceGroupComponent } from 'src/app/admin/maintenance/pages/maintenance-group/maintenance-group.component';
import { AttributeGroupComponent } from 'src/app/admin/attributes/pages/attribute-group/attribute-group.component';
import { CommandGroupComponent } from 'src/app/admin/commands/pages/command-group/command-group.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  assigedRole = []
  show = true;

  private idColumn = 'id';
  groups;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name',];
  constructor(private groupService:GroupService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog) {
    this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.getAllGroup();
  }

  getAllGroup(): void {
    this.groupService.getAllGroup().subscribe(res => {
      this.groups = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editGroup(data): void{
    this.router.navigate(['admin/traccar/group/edit', data.id]);
  }



  deleteGroup(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.groupService.deleteGroup(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.groups = dataSource.data;
   const itemIndex = this.groups.findIndex(obj => obj[idColumn] === recordId);
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
    
      this.dialog.open(DriverGroupComponent,  {
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
    
      this.dialog.open(NotificationGroupComponent,  {
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
    
      this.dialog.open(MaintenanceGroupComponent,  {
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
    
      this.dialog.open(AttributeGroupComponent,  {
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
    
      this.dialog.open(CommandGroupComponent,  {
        width: '580px',
        height: '460px',
        data: { pageValue: data.id }
      }).afterClosed()
      .subscribe(response => {});
    }

    goAddItem(){
      this.router.navigate(['admin/traccar/group/add']);
    }


}
