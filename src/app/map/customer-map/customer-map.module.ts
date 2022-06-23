import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerMapRoutingModule } from './customer-map-routing.module';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { BottomDetailsComponent } from './pages/bottom-details/bottom-details.component';
import { HistoryInfoComponent } from './pages/history-info/history-info.component';
import { MapInfoComponent } from './pages/map-info/map-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertAddComponent } from './pages/alert-add/alert-add.component';


@NgModule({
  declarations: [SideMenuComponent, BottomDetailsComponent, HistoryInfoComponent, MapInfoComponent, AlertAddComponent],
  imports: [
    CommonModule,
    CustomerMapRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerMapModule { }
