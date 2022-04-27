import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GeofencesRoutingModule } from './geofences-routing.module';
import { GeofenceAddComponent } from './pages/geofence-add/geofence-add.component';
import { GeofenceListComponent } from './pages/geofence-list/geofence-list.component';
import { GeofenceEditComponent } from './pages/geofence-edit/geofence-edit.component';
import { GeofenceMapComponent } from './pages/geofence-map/geofence-map.component';
import { GeofenceMapEditComponent } from './pages/geofence-map-edit/geofence-map-edit.component';


@NgModule({
  declarations: [GeofenceAddComponent, GeofenceListComponent, GeofenceEditComponent, GeofenceMapComponent, GeofenceMapEditComponent],
  imports: [
    CommonModule,
    GeofencesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule
  ]
})
export class GeofencesModule { }
