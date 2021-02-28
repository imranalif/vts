import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from '../../../../../shared/services/dialog.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  assigedRole=[]
  private idColumn = 'id';
  groups;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id', 'name', 'permission', 'status', ];
  constructor(private itemService:ItemService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService:DialogService) {
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
     }

  ngOnInit(): void {
    this.getAllItem();
    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('item_edit')==false && this.assigedRole.includes('item_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'permission', 'status', ];
    }
  }

  getAllItem(): void {
    this.itemService.getAllItem().subscribe(res => {
      this.groups = res;
      this.dataSource = new MatTableDataSource( res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editItem(data): void{
    this.router.navigate(['admin/authorization/item/edit', data.id]);
  }

  editPermission(data): void{
    this.router.navigate(['admin/users/roles/role-permission', data.id]);
  }

  goAddItem(){
    this.router.navigate(['/admin/authorization/item/add']);
  }

  deleteItem(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.itemService.deleteItem(data.id).subscribe();
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
