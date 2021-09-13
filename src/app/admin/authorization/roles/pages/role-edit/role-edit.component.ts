import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from '../../services/role.service';


@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  userData;
  Id: string;
  createdBy: string;
  submitted = false;
  myform: FormGroup;

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private rolesService: RoleService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      created_by: [''],
      description: [''],
      status: ['', [Validators.required]]
    });
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  edit(id): void {
    this.rolesService.getRoleById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      name: data.name,
      description: data.description,
      status: data.status
    });
    this.createdBy = data.created_by;
    console.log(this.createdBy);
  }

  openSnackBar(): void {
    this.snackBar.open('Updated Successfully!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    }); }


    goBack(){
      this.router.navigate(['admin/authorization/roles/list']);  
    }

  updateRole(): void{
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
   
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    this.myform.value.created_by = this.createdBy;
    console.log(this.myform.value);
    this.rolesService.updateRole(this.Id, this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['admin/authorization/roles/list']); 
    });
  }


}
