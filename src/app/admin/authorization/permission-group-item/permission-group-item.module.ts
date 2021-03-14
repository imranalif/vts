import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { PermissionGroupItemRoutingModule } from './permission-group-item-routing.module';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { UniqueItemDirective } from './services/unique-item.directive';


@NgModule({
  declarations: [ItemListComponent, ItemAddComponent, ItemEditComponent, UniqueItemDirective],
  imports: [
    CommonModule,
    PermissionGroupItemRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class PermissionGroupItemModule { }
