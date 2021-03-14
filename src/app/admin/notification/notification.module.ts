import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificainAddComponent } from './pages/notificain-add/notificain-add.component';
import { NotificainListComponent } from './pages/notificain-list/notificain-list.component';
import { NotificainEditComponent } from './pages/notificain-edit/notificain-edit.component';
import { NotificationPopupComponent } from './pages/notification-popup/notification-popup.component';
import { NotificationGroupComponent } from './pages/notification-group/notification-group.component';
import { NotificationUserComponent } from './pages/notification-user/notification-user.component';


@NgModule({
  declarations: [NotificainAddComponent, NotificainListComponent, NotificainEditComponent, NotificationPopupComponent, NotificationGroupComponent, NotificationUserComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class NotificationModule { }
