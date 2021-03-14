import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { QueryRoutingModule } from './query-routing.module';
import { QueryAddComponent } from './pages/query-add/query-add.component';
import { QueryListComponent } from './pages/query-list/query-list.component';
import { QueryEditComponent } from './pages/query-edit/query-edit.component';


@NgModule({
  declarations: [QueryAddComponent, QueryListComponent, QueryEditComponent],
  imports: [
    CommonModule,
    QueryRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class QueryModule { }
