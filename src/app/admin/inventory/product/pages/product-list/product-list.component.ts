import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { DialogService } from '../../../../../shared/services/dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private idColumn = 'id';
  products;
  assigedRole=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id', 'name', 'company', 'price', ];
  constructor(private productService:ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService:DialogService) {
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
     }

  ngOnInit(): void {
    this.getAllProduct();
    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('category_edit')==false && this.assigedRole.includes('category_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'description', 'type', ];
    }
  }

  getAllProduct(): void {
    this.productService.getAllProduct().subscribe(res => {
      this.products = res;
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
         this.productService.deleteProduct(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.products = dataSource.data;
   const itemIndex = this.products.findIndex(obj => obj[idColumn] === recordId);
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
