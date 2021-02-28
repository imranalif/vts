import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { NotificainAddComponent } from './pages/notificain-add/notificain-add.component';
import { NotificainEditComponent } from './pages/notificain-edit/notificain-edit.component';
import { NotificainListComponent } from './pages/notificain-list/notificain-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: NotificainAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'notification_add'}
  },
  {
    path: 'list',
    component: NotificainListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'notification_list'}
  },
  {
    path: 'edit/:id',
    component: NotificainEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'notification_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
