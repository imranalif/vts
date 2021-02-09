import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ItemService } from '../../services/item.service';
import { GroupService } from '../../../permission-group/services/group.service';
import { UniqueItemValidator } from '../../services/unique-item.directive';


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {
  groups
  submitted = false;
  myform: FormGroup;
  userData;
  weights=[];

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private itemService:ItemService,
    private groupService:GroupService) {
      for (let i = 1; i < 45; i++) {
        this.weights.push(i);
  
      }
     }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      permission: [null, '', UniqueItemValidator(this.itemService), [Validators.required]],
      group_id: ['', [Validators.required]],
      weight: [''],
      created_by: [''],
      status: [,[Validators.required]]
    });
    this.getAllGroup();
  }

  getAllGroup(): void {
    this.groupService.getAllGroup().subscribe(res => {
      this.groups = res;
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addItem(){
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    this.itemService.addItem(this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/authorization/item/list']);
    })
  }

}
