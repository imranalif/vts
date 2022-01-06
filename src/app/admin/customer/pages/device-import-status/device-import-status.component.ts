import { Component, OnInit,ViewChild, Optional, Inject,OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { CustomerService } from '../../services/customer.service';
import { timer, interval, Subscription } from "rxjs";

@Component({
  selector: 'app-device-import-status',
  templateUrl: './device-import-status.component.html',
  styleUrls: ['./device-import-status.component.scss']
})
export class DeviceImportStatusComponent implements OnInit,OnDestroy {
  obs: Subscription;
  errorData;
  error=1;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = [ 'id', 'status', 'reason',];
    constructor(
      private customerService: CustomerService,
      private dialogRef: MatDialogRef<DeviceImportStatusComponent>,
      private dialog: MatDialog,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log('tttttttttt')
        this.errorData = data;
        console.log(this.errorData)
      }
  
    ngOnInit(): void {
      console.log('tttttttttt')
      this.obs=this.customerService.deviceImportStatusCatch.subscribe(res=>{
        console.log(res)
        if(res){
      
  this.errorData=res;
  this.dataSource = new MatTableDataSource(res as any);
  //this.deviceService.importErrorExchange(this.error);
        }
      })
  
    
    }
    ngOnDestroy() {
      this.obs.unsubscribe();
    }
}
