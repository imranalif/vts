import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { GeofenceAddComponent } from './pages/geofence-add/geofence-add.component';
import { GeofenceEditComponent } from './pages/geofence-edit/geofence-edit.component';
import { GeofenceListComponent } from './pages/geofence-list/geofence-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: GeofenceAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'geofence_add'}
  },
  {
    path: 'list',
    component: GeofenceListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'geofence_list'}
  },
  {
    path: 'edit/:id',
    component: GeofenceEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'geofence_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeofencesRoutingModule { }
