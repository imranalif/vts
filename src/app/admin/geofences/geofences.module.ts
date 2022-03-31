import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeofencesRoutingModule } from './geofences-routing.module';
import { GeofenceAddComponent } from './pages/geofence-add/geofence-add.component';
import { GeofenceListComponent } from './pages/geofence-list/geofence-list.component';
import { GeofenceEditComponent } from './pages/geofence-edit/geofence-edit.component';


@NgModule({
  declarations: [GeofenceAddComponent, GeofenceListComponent, GeofenceEditComponent],
  imports: [
    CommonModule,
    GeofencesRoutingModule
  ]
})
export class GeofencesModule { }
