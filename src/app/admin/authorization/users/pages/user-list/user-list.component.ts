import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../../../../../shared/services/dialog.service';
import { UserService } from '../../services/user.service';
import { DriverUserComponent } from 'src/app/admin/driver/pages/driver-user/driver-user.component';
import { NotificationUserComponent } from 'src/app/admin/notification/pages/notification-user/notification-user.component';
import { MaintenanceUserComponent } from 'src/app/admin/maintenance/pages/maintenance-user/maintenance-user.component';
import { AttributeUserComponent } from 'src/app/admin/attributes/pages/attribute-user/attribute-user.component';
import { CommandUserComponent } from 'src/app/admin/commands/pages/command-user/command-user.component';
import { DeviceUserComponent } from 'src/app/admin/devices/pages/device-user/device-user.component';
import { GroupUserComponent } from 'src/app/admin/group/pages/group-user/group-user.component';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { CustomerService } from 'src/app/admin/customer/services/customer.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  myform: FormGroup;
  assigedRole=[];
  currentPage = 1;
  params = {}
  pager: any = [];
  record: any = [];
  page
  users;
  customers
  customerIndex=[]
  private idColumn = 'id';
  groups;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  states = [{ id: 0, value: 'Inactive' }, { id: 1, value: 'Active' }];
  displayedColumns = ['action', 'id', 'name','customer_id', 'customer_name', 'mobile', 'email', 'status',];
  isLoading = true;
  constructor(private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService,
    private dialog: MatDialog,
    private pagination: PaginationService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    ) {
      this.assigedRole = JSON.parse(localStorage.getItem('rolesData'));
     }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      customer_id: [''],

    });
    this.getAllCustomer();
    this.getAllUser();
    let whiteSpace = '   ABCD ';
    console.log( whiteSpace);
console.log( whiteSpace.trim());
   
  }

  // getAllUser(): void {
  //   this.userService.getAllUser().subscribe(res => {
  //     this.users = res;
  //     this.dataSource = new MatTableDataSource(res as any);
  //     setTimeout(() => (this.dataSource.sort = this.sort));
  //     setTimeout(() => (this.dataSource.paginator = this.paginator));
  //   });

  //   this.removeColumn();
  // }

  getAllCustomer(){
    this.customerService.getAllCustomerList().subscribe(res=>{
      this.customers=res;
      console.log(this.customers)
      this.customers.forEach((elem, i) => {
        this.customerIndex[elem.customer_id] = this.customers[i];
      }
      );
    })
  }

  getAllUser(): void {
    this.params = { currentPage: this.currentPage };
    this.userService.getAllUserByPage(this.params).subscribe(res => {
      this.users = res.rows;
      this.record = res.count;
      console.log(res.count)
      this.pager = this.pagination.paginate(this.record);
      console.log(this.pager.totalPages)
      this.dataSource = new MatTableDataSource(this.users as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
      this.isLoading = false;

    });
    this.removeColumn();
  }

  getUserByPage(currentPage): void {
    Object.keys(this.myform).forEach((key) => this.myform.setValue(this.myform.value.trim()));
    this.page = currentPage;
    if (this.page > this.pager.totalPages) {
      return;
    }
    this.params = {
      currentPage: currentPage, name: this.myform.value.name,
       email: this.myform.value.email, phone: this.myform.value.phone,
       customer_id: this.myform.value.customer_id,
    };
    this.userService.getAllUserByPage(this.params).subscribe(res => {
      this.isLoading = false;
      this.users = res.rows;
      // this.record = res.count;
      console.log(this.record);
      this.pager = this.pagination.paginate(this.record, currentPage);
      this.dataSource = new MatTableDataSource(this.users as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    });
  }

  getUserBySearch(): void {
    //this.cleanForm(this.myform)
    this.params = {
      currentPage: this.currentPage, name: this.myform.value.name,
       email: this.myform.value.email, phone: this.myform.value.phone,
       customer_id: this.myform.value.customer_id,
    };
    console.log(this.params);
    this.userService.getAllUserByPage(this.params).subscribe(res => {
      this.isLoading = false;
      this.users = res.rows;
      this.record = res.count;
      this.pager = this.pagination.paginate(this.record);

      this.dataSource = new MatTableDataSource(this.users as any);
      setTimeout(() => (this.dataSource.sort = this.sort));
      setTimeout(() => (this.dataSource.paginator = this.paginator));
    }
    );
  }


  removeColumn(){
    if(this.assigedRole.includes('role_edit')==false && this.assigedRole.includes('role_delete')==false ){
      this.displayedColumns = [ 'id', 'name', 'mobile', 'email', 'status' ];
    }
  }

  editUser(data): void {
    this.router.navigate(['admin/authorization/users/edit', data.id]);
  }

  deleteUser(data): void {
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteUser(data.id).subscribe();
          this.deleteRowDataTable(data.id, this.idColumn, this.paginator, this.dataSource);
          this.openSnackBar();
        }
      });
  }

  private deleteRowDataTable(recordId, idColumn, paginator, dataSource): void {
    this.users = dataSource.data;
    const itemIndex = this.users.findIndex(obj => obj[idColumn] === recordId);
    dataSource.data.splice(itemIndex, 1);
    dataSource.paginator = paginator;
  }


  openSnackBar(): void {
    this.snackBar.open('Deleted!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  getBack() {
    //this.myform.reset();
    this.getAllUser();
  
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDriverModal(data) {
    console.log(data.id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(DriverUserComponent,  {
      width: '680px',
      height: '460px',
      data: { user_id: data.id,customer_id: data.customer_id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openNotificationModal(data) {
    console.log(data.id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(NotificationUserComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openMaintenanceModal(data) {
    console.log(data.id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(MaintenanceUserComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openAttributeModal(data) {
    console.log(data.id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(AttributeUserComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openCommandModal(data) {
    console.log(data.id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(CommandUserComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openDeviceModal(data) {
    console.log(data.customer_id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(DeviceUserComponent,  {
      width: '580px',
      height: '460px',
      data: {user_id:data.id, customer_id: data.customer_id }
    }).afterClosed()
    .subscribe(response => {});
  }

  openGroupModal(data) {
    console.log(data.id)
    const dialogCofig = new MatDialogConfig();
    dialogCofig.disableClose = true;
    dialogCofig.width = "600px";
    dialogCofig.height = "480px";
  
    this.dialog.open(GroupUserComponent,  {
      width: '580px',
      height: '460px',
      data: { pageValue: data.id }
    }).afterClosed()
    .subscribe(response => {});
  }


  settingDevice(data){
 console.log(data.id)
  }

  goAddPage(){
    this.router.navigate(['admin/authorization/users/add']);
  }
  
  public cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
  }


}
