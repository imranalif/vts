import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReportsRoutingModule } from './reports-routing.module';
import { PositionReportComponent } from './pages/position-report/position-report.component';
import { DrivesStopsReportComponent } from './pages/drives-stops-report/drives-stops-report.component';
import { IgnitionReportComponent } from './pages/ignition-report/ignition-report.component';


@NgModule({
  declarations: [PositionReportComponent, DrivesStopsReportComponent, IgnitionReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule
  ]
})
export class ReportsModule { }
