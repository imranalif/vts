import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ClientRoutingModule } from './client-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule, FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ClientModule { }
