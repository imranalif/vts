import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers
  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
  ) { }

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoading = true;
  displayedColumns = ['id', 'name', 'email', 'phone', 'contact_address', 'billing_address',];

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer(): void {
    this.customerService.getAllCustomer().subscribe(res => {
      this.customers = res;
      this.dataSource = new MatTableDataSource(this.customers as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));

      this.isLoading = false;

    });
  }

  applyFilter(filterValue:string){

  }

}
