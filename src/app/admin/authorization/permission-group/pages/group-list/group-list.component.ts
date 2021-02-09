import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from '../../../../../shared/services/dialog.service';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  assigedRole=[]
  show=true;
  
  private idColumn = 'id';
  groups;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id', 'name', 'description', 'status', ];
  constructor(private groupService:GroupService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService:DialogService) { 
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
    }

  ngOnInit(): void {
    this.getAllGroup();
    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('group_edit')==false && this.assigedRole.includes('group_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'description', 'status', ];
    }
  }

  getAllGroup(): void {
    this.groupService.getAllGroup().subscribe(res => {
      this.groups = res;
      this.dataSource = new MatTableDataSource( res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editGroup(data): void{
    this.router.navigate(['admin/authorization/group/edit', data.id]);
  }

  editPermission(data): void{
    this.router.navigate(['admin/users/roles/role-permission', data.id]);
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

}
