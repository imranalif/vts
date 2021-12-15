import { Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerImportComponent } from '../customer-import/customer-import.component';
import { InvalidShowComponent } from '../invalid-show/invalid-show.component';
import { timer, interval, Subscription } from "rxjs";

@Component({
  selector: 'app-reseller-customer',
  templateUrl: './reseller-customer.component.html',
  styleUrls: ['./reseller-customer.component.scss']
})
export class ResellerCustomerComponent implements OnInit,OnDestroy {
  
  Id
  customers
  errorData
  errorCatch=''
  testingValue;
  obs: Subscription;
  states = [{ id: 0, value: 'Inactive'},{ id: 1, value: 'Active' }  ];
  displayedColumns = ['id', 'customer_id', 'name', 'email', 'phone',  'status',];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  constructor( private route:ActivatedRoute,
    private customerService:CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    ) { 
      this.testingValue=0;
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.getCustomerByReseller(this.Id);
    });
    console.log(this.testingValue)

    this.obs=this.customerService.importDataCatch.subscribe(res => {
      console.log(res)
      this.errorCatch=res;
      if (this.testingValue==1) {
        this.errorData=res;
        this.customerService.importErrorExchange(res);
        this.isLoading = true;
        //this.openImportErrorModal();
        setTimeout(() => {
          this.getCustomerByReseller(this.Id);
        }, 1000);
        setTimeout(() => {
          this.openImportErrorModal();
        }, 1000);
        
        
      }
    })
  

this.addCustomer();
  console.log(this.testingValue)
    
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

  // error(){
  //   this.customerService.importDataCatch.subscribe(res => {
  //     console.log(res)
  //     if (res) {
  //       this.errorData=res;
  //       this.customerService.importErrorExchange(res);
  //       this.isLoading = true;
  //       setTimeout(() => {
  //         this.getCustomerByReseller(this.Id);
  //       }, 1000);
  //       setTimeout(() => {
  //         this.openImportErrorModal();
  //       }, 1500);
        
        
  //     }
  //   })
  // }

  getCustomerByReseller(id){
  
this.customerService.getCustomerByReseller(id).subscribe(res=>{
  this.customers=res;
  this.dataSource = new MatTableDataSource(res as any);
  setTimeout(() => (this.dataSource.sort = this.sort));
  setTimeout(() => (this.dataSource.paginator = this.paginator));

  this.isLoading = false;
})
  }

  addCustomer(){
    this.testingValue=1;
  }

  openCustomerModal(id) {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(CustomerImportComponent,  {
      width: '580px',
      height: '460px',
      data: { id: id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openImportErrorModal() {
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(InvalidShowComponent,  {
      width: '580px',
      height: '260px',
      data: this.errorData
    }).afterClosed()
    .subscribe(response => {});
  }

}
