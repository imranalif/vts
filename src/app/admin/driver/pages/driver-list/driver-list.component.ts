import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { timer, interval, Subscription } from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriverService } from '../../services/driver.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { saveAs } from 'file-saver'

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { DateformateService } from 'src/app/shared/services/dateformate.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  mediaSub: Subscription;
  tr: boolean
  fa: boolean
  myform: FormGroup;
  assigedRole = []
  show = true;

  page: any;
  currentPage = 1;
  params = {}
  pager: any = [];
  record: any = [];
  isLoading = true;
  private idColumn = 'id';
  drivers;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name', 'identifier','phone','license','createdtime','updatedtime'];
  constructor(private driverService: DriverService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private mediaObserver: MediaObserver,
    private pagination: PaginationService,
    private dateFormatService: DateformateService) {
    this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: [''],
      identifier: [''],
      phone: [''],
      driving_license: [''],
      fromdate: [],
      todate: [],

    });
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        if (result.mqAlias == 'xs') {
          this.tr = true;
          this.fa = false;
        }
        else {
          this.tr = false;
          this.fa = true;
        }
      }
    )

    this.getAllDriver();
  }

  getAllDriverTest(): void {
    this.driverService.getAllDriver().subscribe(res => {
      this.drivers = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }


  getAllDriver(): void {
    this.params = { currentPage: this.currentPage };
    this.driverService.getAllDriversByPage(this.params).subscribe(res => {
      this.drivers = res.rows;
      this.record = res.count;
      console.log(res.count)
      this.pager = this.pagination.paginate(this.record);
      console.log(this.pager.totalPages)
      this.dataSource = new MatTableDataSource(this.drivers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
      this.isLoading = false;

    });
  }

  getDriverByPage(currentPage): void {
    this.page = currentPage;
    if (this.page > this.pager.totalPages) {
      return;
    }
    this.params = {
      currentPage: currentPage, name: this.myform.value.name,
      identifier: this.myform.value.identifier, phone: this.myform.value.phone, driving_license: this.myform.value.driving_license,
      fromdate: this.myform.value.fromdate,
      todate: this.myform.value.todate,

    };
    this.driverService.getAllDriversByPage(this.params).subscribe(res => {
      this.isLoading = false;
      this.drivers = res.rows;
      // this.record = res.count;
      console.log(this.record);
      this.pager = this.pagination.paginate(this.record, currentPage);
      this.dataSource = new MatTableDataSource(this.drivers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getDriverBySearch(): void {
    if(this.myform.value.fromdate){
      this.myform.value.fromdate = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate); 
    }
    if(this.myform.value.todate){
      this.myform.value.todate = this.dateFormatService.dateTime('datetime', this.myform.value.todate); 
    }
    // var from_date = this.dateFormatService.dateTime('datetime', this.myform.value.fromdate);
    // var to_date = this.dateFormatService.dateTime('datetime', this.myform.value.todate)
    this.params = {
      currentPage: this.currentPage, name: this.myform.value.name, identifier: this.myform.value.identifier,
      phone: this.myform.value.phone, driving_license: this.myform.value.driving_license, fromdate: this.myform.value.fromdate,
      todate: this.myform.value.todate,
    };

    this.driverService.getAllDriversByPage(this.params).subscribe(res => {
      this.isLoading = false;
      this.drivers = res.rows;
      this.record = res.count;
      this.pager = this.pagination.paginate(this.record);

      this.dataSource = new MatTableDataSource(this.drivers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    }
    );
  }



  editDriver(data): void{
    this.router.navigate(['admin/traccar/driver/edit', data.id]);
  }



  deleteDriver(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.driverService.deleteDriver(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.drivers = dataSource.data;
   const itemIndex = this.drivers.findIndex(obj => obj[idColumn] === recordId);
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
      this.router.navigate(['/admin/traccar/driver/add']);
    }

    downloadFile(data: any) {
      const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
      const header = Object.keys(data[0]);
      let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
      csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');
  
      var blob = new Blob([csvArray], {type: 'text/csv' })
      saveAs(blob, "myFile.csv");
  }


getBack(){
  this.getAllDriver();
}
goAddPage(){
  this.router.navigate(['/admin/traccar/driver/add']);
}
public cleanForm(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
}


}
