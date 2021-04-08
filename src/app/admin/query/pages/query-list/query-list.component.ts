import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { PaginationService } from '../../../../shared/services/pagination.service';
//import { DialogService } from '../../../../../shared/services/dialog.service';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent implements OnInit {
  myform: FormGroup;
  private idColumn = 'id';
  queries=[];
  assigedRole=[];

  currentPage= 1;
  params={}
  pager: any = [];
  record: any = [];
  page
  name

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  states = [{id: 0, value: 'Inactive' }, {id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id','queryID', 'name', 'email', 'phone','source', 'status', ];
  constructor(
    private fb: FormBuilder,
    private queryService:QueryService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService:DialogService,
    private pagination: PaginationService,
    private changeDetectorRefs:ChangeDetectorRef) {
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
     }


  ngOnInit(): void {

    this.myform = this.fb.group({
      queryID: [''],
      name: [''],
      phone: [''],
      email: [''],
      source: [''],
      status: [''],
    
    });

    this.getAllQuery();
    this.removeColumn();
  }

  removeColumn(){
    if(this.assigedRole.includes('query_edit')==false && this.assigedRole.includes('query_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'email', 'phone',];
    }
  }

  getAllQuery(): void {
    this.params = {currentPage: this.currentPage};
    this.queryService.getAllQuery(this.params).subscribe(res => {
      this.queries = res.rows;
      this.record = res.count;
      console.log(res.count)
      this.pager = this.pagination.paginate(this.record);
      console.log(this.pager.totalPages)
      this.dataSource = new MatTableDataSource( this.queries as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
      this.changeDetectorRefs.detectChanges()
      this.isLoading = false;
      
    });
  }
  getBack(){
    this.getAllQuery();
    this.myform.reset();
  }

  getQueryByPage(currentPage): void {
    this.page = currentPage;
    if(this.page>this.pager.totalPages){
      return;
    }
    this.params = {currentPage: currentPage, queryID: this.myform.value.queryID, name: this.myform.value.name,
      phone: this.myform.value.phone, email: this.myform.value.email, source: this.myform.value.source,
      status: this.myform.value.status};
      this.queryService.getAllQuery(this.params).subscribe(res => {
      this.isLoading = false;
      this.queries = res.rows;
      // this.record = res.count;
      console.log(this.record);
      this.pager = this.pagination.paginate(this.record, currentPage);
      this.dataSource = new MatTableDataSource( this.queries as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getQueryBySearch(): void{
    this.params = {currentPage: this.currentPage, queryID: this.myform.value.queryID, name: this.myform.value.name,
      phone: this.myform.value.phone, email: this.myform.value.email, source: this.myform.value.source,
      status: this.myform.value.status};
    console.log(this.params);
    this.queryService.getAllQuery(this.params).subscribe(
      res => {
        this.isLoading = false;
        this.queries = res.rows;
        this.record = res.count;
        this.pager = this.pagination.paginate(this.record);
        
        this.dataSource = new MatTableDataSource( this.queries as any);
        setTimeout(() => (this.dataSource.sort = this.sort));
        setTimeout(() => (this.dataSource.paginator = this.paginator));
      }
    );
      }

  detailsQuery(data): void{
    console.log(data);
    this.router.navigate(['admin/query/details', data]);
  }

  editQuery(data): void{
    console.log(data.queryID);
    this.router.navigate(['admin/query/edit', data.queryID]);
  }


  deleteQuery(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.queryService.deleteQuery(data.queryID).subscribe();
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
    goAppPage(){
      this.router.navigate(['/admin/query/add']);
    }

    //getIncomingByPage(currentPage): void {}

}
