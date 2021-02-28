import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';


import { RolesRoutingModule } from './roles-routing.module';
import { RoleAddComponent } from './pages/role-add/role-add.component';
import { RoleListComponent } from './pages/role-list/role-list.component';
import { RoleEditComponent } from './pages/role-edit/role-edit.component';
import { RolePermissionComponent } from './pages/role-permission/role-permission.component';




@NgModule({
  declarations: [RoleAddComponent, RoleListComponent, RoleEditComponent, RolePermissionComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class RolesModule { }
