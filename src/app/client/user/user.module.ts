import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DriverModule } from 'src/app/admin/driver/driver.module';
import { SlideMenuComponent } from './pages/slide-menu/slide-menu.component';
import { TestComponent } from './pages/test/test.component';
import { BottomMenuComponent } from './pages/bottom-menu/bottom-menu.component';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HistoryMenuComponent } from './pages/history-menu/history-menu.component';



@NgModule({
  declarations: [UserInfoComponent, SlideMenuComponent, TestComponent, BottomMenuComponent, HistoryMenuComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    DriverModule,
    MatDatetimepickerModule, MatNativeDatetimeModule,
    ReactiveFormsModule,
    FormsModule


  ],
  
})
export class UserModule { }
