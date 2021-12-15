import { Component, OnInit, Optional, Inject,OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog/";
import { CustomerService } from '../../services/customer.service';
import { timer, interval, Subscription } from "rxjs";

@Component({
  selector: 'app-invalid-show',
  templateUrl: './invalid-show.component.html',
  styleUrls: ['./invalid-show.component.scss']
})
export class InvalidShowComponent implements OnInit,OnDestroy {
  errorData;
  error=1;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = [ 'id', 'status', 'reason',];

obs: Subscription;
  constructor(
    private customerService:CustomerService,
    private dialogRef: MatDialogRef<InvalidShowComponent>,
    private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.obs=this.customerService.importErrorCatch.subscribe(res=>{
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
