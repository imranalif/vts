import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';
import { UserService } from 'src/app/admin/authorization/users/services/user.service';
import { CategoryService } from 'src/app/admin/inventory/category/services/category.service';

@Component({
  selector: 'app-query-details',
  templateUrl: './query-details.component.html',
  styleUrls: ['./query-details.component.scss']
})
export class QueryDetailsComponent implements OnInit {
  reopen: Number = 0;
  queryStatus: string;
  queryStatusObject = {};
  customerObject = {};
  show: Number;
  queryProducts
  queryMrc;
  queryAction;
  categories
  categoryIndex = []
  fileurl: string = null
  usersIndex = [];
  files
  queryID
  users
  queryData
  Id
  submitted = false;
  myform: FormGroup;
  userData;
  isLoading = true;
  states = [{ id: 1, value: 'Communicated' }, { id: 0, value: 'Visited' }, { id: 0, value: 'Proposal Send' }, { id: 0, value: 'Negotiality' }, { id: 0, value: 'Work Order' }, { id: 0, value: 'Requsition' }, { id: 0, value: 'Delivered' }, { id: 0, value: 'Successful' }, { id: 0, value: 'Canceled' }, { id: 0, value: 'Failed' }, { id: 0, value: 'Hold' }];
  displayedColumns = ['category', 'model', 'unit_price', 'quantity', 'total_price', 'complementary',];
  displayedMrcColumns = ['title', 'amount'];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private queryService: QueryService,
    private route: ActivatedRoute,
    private userService: UserService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      remarks: ['', [Validators.required]],
      file: [''],
      states: ['', [Validators.required]],
      hold_date: [''],

    });

    this.getAllCategory();

    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe(res => {
      this.users = res;
      console.log(this.users[6]?.full_name)
      this.users.forEach((elem, i) => {
        this.usersIndex[elem.id] = this.users[i];
        console.log(this.usersIndex[6]?.full_name)
      }
      );
    });
  }

  getAllCategory(): void {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;

      this.categories.forEach((elem, i) => {
        this.categoryIndex[elem.id] = this.categories[i];
      }
      );
    });
  }

  edit(id): void {
    this.queryService.getQueryById(id).subscribe(data => {
      this.queryData = data;
      if (this.queryData.status == 'Hold') {
        this.reopen = 1;
      }
      this.getAllUser();
      this.queryService.getQueryProductById(id).subscribe(res => {
        this.queryProducts = res;
      });
      this.queryService.getQueryMrcById(id).subscribe(response => {
        this.isLoading = false;
        this.queryMrc = response;
      });

      this.queryService.getQueryActionById(id).subscribe(resp => {
        this.queryAction = resp;
      });
    });
  }

  onFileSelected(event): void {
    if (event.target.files.length > 0) {
      const image = event.target.files[0];
      this.files = image;

      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        this.fileurl = event.target.result;
      };
      reader.readAsDataURL(this.files);
    }
  }

  // setData(data): void {
  //   this.myform.patchValue({
  //     name: data.name,
  //     description: data.description,
  //     status: data.status
  //   });
  // }

  openSnackBar(): void {
    this.snackBar.open('Customer Created Successfully!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  errorMessage(): void {
    this.snackBar.open('Something is error!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  goBack() {
    this.router.navigate(['/admin/query/list']);
  }

  onChangeState(data) {
    console.log(data)
    if (data == 'Hold') {
      this.show = 1
    }
    else
      this.show = 0;

    if (data == 'Visited') {
      this.queryStatus = 'Prosessing';
    }

    else if (data == 'Communicated') {
      this.queryStatus = 'Prosessing';
    }
    else if (data == 'Proposal Send') {
      this.queryStatus = 'Prosessing';
    }
    else if (data == 'Work Order') {
      this.queryStatus = 'Prosessing';
    }
    else if (data == 'Requsition') {
      this.queryStatus = 'Prosessing';
    }
    else if (data == 'Negotiality') {
      this.queryStatus = 'Prosessing';
    }
    else
      this.queryStatus = data;
  }

  reopenForm() {
    this.queryData.status = 'HoldingOut';
    this.reopen = 0;
  }

  addQueryAction(): void {
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    //this.myform.value.queryID = this.Id;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    const formData = new FormData();
    formData.append('queryID', this.Id);
    formData.append('file', this.files);
    formData.append('remarks', this.myform.get('remarks').value);
    formData.append('states', this.myform.get('states').value);
    formData.append('created_by', this.myform.value.created_by);
    formData.append('hold_date', this.myform.get('hold_date').value);

    this.queryStatusObject = { status: this.queryStatus }
    if (this.queryData.status != 'Prosessing') {
      this.queryService.updateQueryStaus(this.Id, this.queryStatusObject).subscribe();
    }
    

    if (this.queryStatus == 'Successful') {
      console.log('status testing');
      this.customerObject = {
        customer_id: this.Id, name: this.queryData.name, phone: this.queryData.phone, created_by: this.myform.value.created_by,
        email: this.queryData.email, contact_address: this.queryData.contact_address, billing_address: this.queryData.billing_address
      }
      this.queryService.addQueryCustomer(this.customerObject).subscribe(data => {
        this.openSnackBar();
      });
    }

    this.queryService.addQueryAction(formData).subscribe(data => {
      console.log(formData)
      //this.openSnackBar();
      this.router.navigate(['/admin/query/list']);
    },
      error => {
        this.errorMessage();
      }
    );

  }



}
