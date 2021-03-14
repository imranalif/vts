import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryService } from '../../services/query.service';

@Component({
  selector: 'app-query-add',
  templateUrl: './query-add.component.html',
  styleUrls: ['./query-add.component.scss']
})
export class QueryAddComponent implements OnInit {
queryID
  submitted = false;
  myform: FormGroup;
  userData;
  states = [{ id: 1, value: 'GPS Device' }, { id: 0, value: 'Camera' }, { id: 0, value: 'Burzer' }];
  priorities= [{ id: 1, value: 'Low' }, { id: 0, value: 'High' }, { id: 0, value: 'Medium' }];
  sources= [{ id: 1, value: 'Phone' }, { id: 0, value: 'Email' }, { id: 0, value: 'Web' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private queryService:QueryService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['',[Validators.email]],
      address: [''],
      source: [''],
      type: [''],
      priority: [''],
      model: [''],
      quantity: [''],
      amount: [''],
      title: [''],
      price: [''],
      created_by: [''],
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addQuery(){
    this.submitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) {
      return;
  }
    this.queryID=Math.random().toString().slice(2,11);
    this.myform.value.queryID=this.queryID;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.queryService.addQuery(this.myform.value).subscribe(res=>{
      console.log(this.myform.value)
      this.openSnackBar();
      this.router.navigate(['/admin/query/list']);
    })
  }


}
