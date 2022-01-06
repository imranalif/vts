import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material/material.module';

import { ResellerRoutingModule } from './reseller-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewboardComponent } from './viewboard/viewboard.component';


@NgModule({
  declarations: [TopbarComponent, SidebarComponent, ViewboardComponent],
  imports: [
    CommonModule,
    ResellerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class ResellerMenuModule { }
