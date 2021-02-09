import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TopmenuComponent } from './topmenu/topmenu.component';


@NgModule({
  declarations: [SidemenuComponent, TopmenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class AdminMenuModule { }
