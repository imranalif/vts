import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { GroupRoutingModule } from './group-routing.module';
import { GroupAddComponent } from './pages/group-add/group-add.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';


@NgModule({
  declarations: [GroupAddComponent, GroupListComponent, GroupEditComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GroupModule { }
