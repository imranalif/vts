import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';

import { PermissionGroupRoutingModule } from './permission-group-routing.module';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { GroupAddComponent } from './pages/group-add/group-add.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';


@NgModule({
  declarations: [GroupListComponent, GroupAddComponent, GroupEditComponent],
  imports: [
    CommonModule,
    PermissionGroupRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PermissionGroupModule { }
