import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
//import { DialogService } from '../../../../../shared/services/dialog.service';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent implements OnInit {

  private idColumn = 'id';
  queries;
  assigedRole=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id','queryID', 'name', 'email', 'phone', ];
  constructor(private queryService:QueryService,
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
    if(this.assigedRole.includes('query_edit')==false && this.assigedRole.includes('query_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'email', 'phone',];
    }
  }

  getAllCategory(): void {
    this.queryService.getAllQuery().subscribe(res => {
      this.queries = res;
      this.dataSource = new MatTableDataSource( res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editQuery(data): void{
    console.log(data);
    this.router.navigate(['admin/query/edit', data]);
  }


  deleteQuery(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.queryService.deleteQuery(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.queries = dataSource.data;
   const itemIndex = this.queries.findIndex(obj => obj[idColumn] === recordId);
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
