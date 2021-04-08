import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QueryRoutingModule } from './query-routing.module';
import { QueryAddComponent } from './pages/query-add/query-add.component';
import { QueryListComponent } from './pages/query-list/query-list.component';
import { QueryEditComponent } from './pages/query-edit/query-edit.component';
import { QueryDetailsComponent } from './pages/query-details/query-details.component';


@NgModule({
  declarations: [QueryAddComponent, QueryListComponent, QueryEditComponent, QueryDetailsComponent],
  imports: [
    CommonModule,
    QueryRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule
  ]
})
export class QueryModule { }
