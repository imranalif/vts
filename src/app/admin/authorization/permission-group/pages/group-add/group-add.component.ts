import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {

  submitted = false;
  myform: FormGroup;
  userData;

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private groupService:GroupService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      created_by: [''],
      description: [''],
      status: []
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addGroup(){
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.groupService.addGroup(this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/authorization/group/list']);
    })
  }

}
