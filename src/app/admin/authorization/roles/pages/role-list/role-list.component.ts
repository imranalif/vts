import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from '../../services/role.service';
import { DialogService } from '../../../../../shared/services/dialog.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  private idColumn = 'id';
  userRoles;
  assigedRole=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id', 'name', 'description', 'status', ];
  constructor(private roleService:RoleService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService:DialogService) {
      this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
     }

  ngOnInit(): void {
    this.getAllRole();
    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('role_edit')==false && this.assigedRole.includes('role_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'description', 'status', ];
    }
  }

  getAllRole(): void {
    this.roleService.getAllRole().subscribe(res => {
      this.userRoles = res;
      this.dataSource = new MatTableDataSource( res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editRole(data): void{
    this.router.navigate(['admin/authorization/roles/edit', data.id]);
  }

  rolePermission(data): void{
    this.router.navigate(['admin/authorization/roles/permission', data.id]);
  }

  deleteRole(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.roleService.deleteRole(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.userRoles = dataSource.data;
   const itemIndex = this.userRoles.findIndex(obj => obj[idColumn] === recordId);
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
      this.router.navigate(['/admin/authorization/roles/add']);
    }


}
