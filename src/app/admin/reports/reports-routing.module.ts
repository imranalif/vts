import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { DrivesStopsReportComponent } from './pages/drives-stops-report/drives-stops-report.component';
import { IgnitionReportComponent } from './pages/ignition-report/ignition-report.component';
import { OfflineComponent } from './pages/offline/offline.component';
import { OnlineComponent } from './pages/online/online.component';
import { ParkingReportComponent } from './pages/parking-report/parking-report.component';
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
  {
    path: 'parking_report',
    component: ParkingReportComponent,
    canActivate: [AuthGuard],
    data: {roles: 'parking_report'}
  },
  {
    path: 'online_report',
    component: OnlineComponent,
    canActivate: [AuthGuard],
    data: {roles: 'online_report'}
  },
  {
    path: 'offline_report',
    component: OfflineComponent,
    canActivate: [AuthGuard],
    data: {roles: 'offline_report'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
