import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  submitted = false;
  myform: FormGroup;
  userData;
  status = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];

  states = [{ id: 0, value: 'GPS Device' }, { id: 1, value: 'Camera' }, { id: 2, value: 'Buzzer' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      created_by: [''],
      description: [''],
      // type: [ ,[Validators.required]],
      status: [ ,[Validators.required]]
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addCategory(){
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      console.log("rrrr")
      return;
  }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.categoryService.addCategory(this.myform.value).subscribe(res=>{
      console.log(this.myform.value)
      this.openSnackBar();
      this.router.navigate(['/admin/inventory/category/list']);
    })
  }

}
