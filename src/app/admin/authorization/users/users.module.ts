import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UsersRoutingModule } from './users-routing.module';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ChangepassPopupComponent } from './pages/changepass-popup/changepass-popup.component';
import { UserprofilePopupComponent } from './pages/userprofile-popup/userprofile-popup.component';
import { ImageCropperModule } from 'ngx-image-cropper';







@NgModule({
  declarations: [UserEditComponent, UserAddComponent, UserListComponent, ResetPasswordComponent, ChangePasswordComponent, UserProfileComponent, ChangepassPopupComponent, UserprofilePopupComponent
     ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule,
    ImageCropperModule 
  ],
 
})
export class UsersModule { }
