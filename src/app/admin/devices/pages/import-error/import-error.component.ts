import { Component, OnInit,ViewChild, Optional, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from '../../services/device.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";

@Component({
  selector: 'app-import-error',
  templateUrl: './import-error.component.html',
  styleUrls: ['./import-error.component.scss']
})
export class ImportErrorComponent implements OnInit {
errorData;
error=1;
dataSource = new MatTableDataSource<any>([]);
displayedColumns = [ 'id', 'status', 'reason',];
  constructor(
    private deviceService: DeviceService,
    private dialogRef: MatDialogRef<ImportErrorComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.errorData = data;
      console.log(this.errorData)
    }

  ngOnInit(): void {
    this.deviceService.importDataCatch.subscribe(res=>{
      console.log(res)
      if(res){
    
this.errorData=res;
this.dataSource = new MatTableDataSource(res as any);
//this.deviceService.importErrorExchange(this.error);
      }
    })

  
  }

}
