import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ItemService } from '../../services/item.service';
import { GroupService } from '../../../permission-group/services/group.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  Id: string;
  createdBy
  groups
  filterGroups
  submitted = false;
  myform: FormGroup;
  userData;
  weights=[];

  states = [{ id: 1, value: 'Active' }, { id: 0, value: 'Inactive' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private itemService:ItemService,
    private route: ActivatedRoute,
    private groupService:GroupService) {
      for (let i = 1; i < 45; i++) {
        this.weights.push(i);
  
      }
     }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: ['', [Validators.required]],
      permission: ['', [Validators.required]],
      group_id: ['', [Validators.required]],
      weight: [''],
      created_by: [''],
      description: [''],
      status: []
    });
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
    this.getAllGroup();
  }

  getAllGroup(): void {
    this.groupService.getAllGroup().subscribe(res => {
      this.groups = res;
      this.filterGroups=this.groups
    });
  }

  applyFilter(val): void {
    this.groups = this.filterGroups.filter((unit) => unit.name.toLowerCase().indexOf(val) > -1);
  }

  edit(id): void {
    this.itemService.getItemById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      name: data.name,
      permission: data.permission,
      group_id: data.group_id,
      weight: data.weight,
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

  updateItem(): void{
    this.submitted = true;
    if (this.myform.invalid) {
      return;
  }
   
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.updated_time = new Date();
    this.myform.value.created_by = this.createdBy;
    console.log(this.myform.value);
    this.itemService.updateItem(this.Id, this.myform.value).subscribe(data => {
      this.openSnackBar();
      this.router.navigate(['admin/authorization/item/list']); 
    });
  }


}
