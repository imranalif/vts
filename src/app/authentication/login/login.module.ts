import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material/material.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';


@NgModule({
  declarations: [LoginPageComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class LoginModule { }
