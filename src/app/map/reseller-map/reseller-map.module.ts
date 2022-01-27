import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ResellerMapRoutingModule } from './reseller-map-routing.module';
import { MapViewComponent } from './pages/map-view/map-view.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { BottomBarComponent } from './pages/bottom-bar/bottom-bar.component';
import { HistoryBarComponent } from './pages/history-bar/history-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MapViewComponent, SideBarComponent, BottomBarComponent, HistoryBarComponent],
  imports: [
    CommonModule,
    ResellerMapRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ResellerMapModule { }
