import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'add',
    component: UserAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'user_add'}
  },
  {
    path: 'list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'user_list'}
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'user_edit'}
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthGuard],
    data: {roles: 'user_password_reset'}
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
