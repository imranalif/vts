import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DriverModule } from 'src/app/admin/driver/driver.module';
import { SlideMenuComponent } from './pages/slide-menu/slide-menu.component';



@NgModule({
  declarations: [UserInfoComponent, SlideMenuComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    DriverModule


  ]
})
export class UserModule { }
