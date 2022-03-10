import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DeviceService } from '../../services/device.service';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-device-category-list',
  templateUrl: './device-category-list.component.html',
  styleUrls: ['./device-category-list.component.scss']
})
export class DeviceCategoryListComponent implements OnInit {
  private idColumn = 'id';
  categories;
  assigedRole=[];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  status = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = [ 'action', 'id', 'title', 'icon', 'status' ];
  constructor(private deviceService: DeviceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private pagination: PaginationService,) {
    this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.getAllDeviceCategory();
  }


  getAllDeviceCategory(): void {
    this.deviceService.getAllDeviceCategory().subscribe(res => {
      this.categories = res;
      this.dataSource = new MatTableDataSource( res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editDeviceCategory(data): void{
    this.router.navigate(['admin/traccar/devices/dcat-edit', data.id]);
  }


  deleteDeviceCategory(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.deviceService.deleteDeviceCategory(data.id).subscribe();
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

    addDeviceCategory(){
      this.router.navigate(['/admin/traccar/devices/dcat-add']);
    }

}
