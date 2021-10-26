import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogService } from '../../../../../shared/services/dialog.service';
import { ItemService } from '../../services/item.service';
import { GroupService } from '../../../permission-group/services/group.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  myform: FormGroup;
  assigedRole=[]
  private idColumn = 'id';
  groups;
  permissionGroups;
  permissionGroupIndex=[]
  //dataSource = new MatTableDataSource<any>([]);
  dataSource=[]
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('table') table: MatTable<any>;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id','group', 'name', 'permission','weight', 'status', ];
  constructor(private itemService:ItemService,
    private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
    private dialogService:DialogService,
    private groupService:GroupService,) {
      this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
     }

  ngOnInit(): void {

    this.myform = this.fb.group({
      group: [''],
    });

    this.getAllGroup();
    this.getAllItem();
    this.removeColumn();
  }


 
  removeColumn(){
    if(this.assigedRole.includes('item_edit')==false && this.assigedRole.includes('item_delete')==false ){
      this.displayedColumns = [ 'id', 'group','name', 'permission', 'status', ];
    }
  }

  getAllItem(): void {
    this.itemService.getAllItem().subscribe(res => {
      this.groups = res;
      this.dataSource=res
      //this.dataSource = new MatTableDataSource( res as any);
      // setTimeout(() => (this.dataSource.sort = this.sort));
      // setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  dropTable(event: CdkDragDrop<any[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }


  getAllGroup(): void {
    this.groupService.getAllGroup().subscribe(res => {
      this.permissionGroups = res;
      this.permissionGroups.forEach((elem, i) => {
        this.permissionGroupIndex[elem.id] = this.permissionGroups[i];
      }
      );
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
      //this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onSelectGroup(e){

    }

}
