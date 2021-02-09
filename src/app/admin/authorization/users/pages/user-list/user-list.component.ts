import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from '../../../../../shared/services/dialog.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  assigedRole=[];
  users;
  private idColumn = 'id';
  groups;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name', 'mobile', 'email', 'status',];
  constructor(private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService) {
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
     }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(res => {
      this.users = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });

    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('role_edit')==false && this.assigedRole.includes('role_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'mobile', 'email', 'status' ];
    }
  }

  editUser(data): void {
    this.router.navigate(['admin/authorization/users/edit', data.id]);
  }

  deleteUser(data): void {
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteUser(data.id).subscribe();
          this.deleteRowDataTable(data.id, this.idColumn, this.paginator, this.dataSource);
          this.openSnackBar();
        }
      });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
    this.users = dataSource.data;
    const itemIndex = this.users.findIndex(obj => obj[idColumn] === recordId);
    dataSource.data.splice(itemIndex, 1);
    dataSource.paginator = paginator;
  }


  openSnackBar(): void {
    this.snackBar.open('Deleted!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
