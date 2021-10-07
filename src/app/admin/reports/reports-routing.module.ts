import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { PositionReportComponent } from './pages/position-report/position-report.component';

const routes: Routes = [
  {
    path: 'position',
    component: PositionReportComponent,
    canActivate: [AuthGuard],
    data: {roles: 'query_add'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
