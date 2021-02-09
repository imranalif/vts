import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {
  submitted = false;
  myform: FormGroup;
  userData;
  array1=['1','3','4'];
  array2=['0','5'];
  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private roleService:RoleService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      created_by: [''],
      description: [''],
      status: []
    });
    this.test();
  }

  test(){
    const filteredArray = this.array1.filter(value => this.array2.includes(value));
    
    if(filteredArray!=[]){
      console.log("true")
    }
    if(filteredArray==[]){
      console.log("false")
    }
    console.log(filteredArray)
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addRole(){
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.roleService.addRole(this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/authorization/roles/list']);
    })
  }

}
