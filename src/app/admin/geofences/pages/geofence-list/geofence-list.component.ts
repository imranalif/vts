import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { GeofenceService } from '../../services/geofence.service';
import { IGeofence } from '../../interfaces/geofence.interface';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-geofence-list',
  templateUrl: './geofence-list.component.html',
  styleUrls: ['./geofence-list.component.scss']
})
export class GeofenceListComponent implements OnInit {
  private idColumn = 'id';
  public assigedRole=[];
 public isLoading :boolean = true;
 public geofences: IGeofence[]=[]
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private geofenceService: GeofenceService
  ) {
    this.assigedRole = JSON.parse(sessionStorage.getItem('rolesData'));
   }
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['action', 'id', 'name', 'description'];
  ngOnInit(): void {
    this.getAllGeofence()
  }

 public getAllGeofence(): void {
    this.geofenceService.getAllGeofence().subscribe(res => {
      this.isLoading = false;
      this.geofences = res;
      this.dataSource = new MatTableDataSource(res as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
}
editGeofence(data): void{
  this.router.navigate(['admin/traccar/geofences/edit', data.id]);
}
public goAddPage(): void{
  this.router.navigate(['/admin/traccar/geofences/add']);
}

public deleteGeofenced(data):void{

}

openSnackBar(): void {
  this.snackBar.open('Successfully deleted!!', 'Close', {
    duration: 2000,
    verticalPosition: 'top',
    horizontalPosition: 'end',
  });
}

public deleteGeofence(data): void {
  this.dialogService.openConfirmDialog()
  .afterClosed().subscribe(res => {
    if (res){
       this.geofenceService.deleteGeofence(data.id).subscribe();
       this.deleteRowDataTable (data.id, this.idColumn, this.paginator, this.dataSource);
       this.openSnackBar();
    }
  });
}

private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
 this.geofences = dataSource.data;
 const itemIndex = this.geofences.findIndex(obj => obj[idColumn] === recordId);
 dataSource.data.splice(itemIndex, 1);
 dataSource.paginator = paginator;
}

}
