import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../services/category.service';
import { DialogService } from '../../../../../shared/services/dialog.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  private idColumn = 'id';
  categories;
  assigedRole=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  status = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  states = [{ id: 0, value: 'GPS Device' }, { id: 1, value: 'Camera' }, { id: 2, value: 'Burzer' }];
  displayedColumns = [ 'action', 'id', 'name', 'description', 'status' ];
  constructor(private categoryService:CategoryService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService:DialogService) {
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
     }

  ngOnInit(): void {
    this.getAllCategory();
    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('category_edit')==false && this.assigedRole.includes('category_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'description', 'type','status' ];
    }
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
      this.dataSource = new MatTableDataSource( res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editCategory(data): void{
    this.router.navigate(['admin/inventory/category/edit', data.id]);
  }


  deleteCategory(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.categoryService.deleteCategory(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.categories = dataSource.data;
   const itemIndex = this.categories.findIndex(obj => obj[idColumn] === recordId);
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
