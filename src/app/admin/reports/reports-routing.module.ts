import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { DrivesStopsReportComponent } from './pages/drives-stops-report/drives-stops-report.component';
import { IgnitionReportComponent } from './pages/ignition-report/ignition-report.component';
import { PositionReportComponent } from './pages/position-report/position-report.component';

const routes: Routes = [
  {
    path: 'position',
    component: PositionReportComponent,
    canActivate: [AuthGuard],
    data: {roles: 'query_add'}
  },
  {
    path: 'drives_stops',
    component: DrivesStopsReportComponent,
    canActivate: [AuthGuard],
    data: {roles: 'drives_stops_report'}
  },
  {
    path: 'ignition_report',
    component: IgnitionReportComponent,
    canActivate: [AuthGuard],
    data: {roles: 'ignition_report'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
