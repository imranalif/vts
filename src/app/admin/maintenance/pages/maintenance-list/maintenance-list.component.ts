import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {

  assigedRole = []
  show = true;

  private idColumn = 'id';
  maintenance;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name', 'type',];
  constructor(private maintenanceService: MaintenanceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService) {
    this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
  }

  ngOnInit(): void {
    this.getAllMaintenance();
  }

  getAllMaintenance(): void {
    this.maintenanceService.getAllMaintenance().subscribe(res => {
      this.maintenance = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  editMaintenance(data): void{
    this.router.navigate(['admin/maintenance/edit', data.id]);
  }



  deleteMaintenance(data): void {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res){
         this.maintenanceService.deleteMaintenance(data.id).subscribe();
         this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
         this.openSnackBar();
      }
    });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
   this.maintenance = dataSource.data;
   const itemIndex = this.maintenance.findIndex(obj => obj[idColumn] === recordId);
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
      this.router.navigate(['admin/maintenance/add']);
    }

}
