import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';
import { UserService } from 'src/app/admin/authorization/users/services/user.service';

@Component({
  selector: 'app-query-edit',
  templateUrl: './query-edit.component.html',
  styleUrls: ['./query-edit.component.scss']
})
export class QueryEditComponent implements OnInit {
  d
  files
  fileurl
  queryID
  users
  queryData
  Id
  submitted = false;
  myform: FormGroup;
  userData;
  states = [{ id: 1, value: 'Communicated' }, { id: 0, value: 'Visited' }, { id: 0, value: 'Successful' }];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private queryService:QueryService,
    private route:ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      remark: [''],
      document: [''],
      file: [''],
      states: [''],
      
    });

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
        //this.d[elem.id] = this.users[i];
      }
      );
    });
  }

  edit(id): void {
    this.queryService.getQueryById(id).subscribe(data => {
      this.queryData=data;
      this.getAllUser();
      //this.setData(data);
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
    this.snackBar.open('Updated Successfully!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    }); }

    addQueryAction(): void{
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
    this.myform.value.queryID = this.Id;
    this.queryService.addQueryAction( this.myform.value).subscribe(data => {
      console.log("aaaaaaa")
      this.openSnackBar();
      this.router.navigate(['/admin/query/list']); 
    });
  }


}
