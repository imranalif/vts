import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: 'admin',
    component: TopmenuComponent,
    children : [
      { path: 'dashboard', component: Dashboard2Component },
      { path: 'profile', component: ProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      
      {
        path: 'authorization',
        loadChildren: () => import('../../admin/authorization/authorization.module').then(m => m.AuthorizationModule),
      },
      {
        path: 'traccar/driver',
        loadChildren: () => import('../../admin/driver/driver.module').then(m => m.DriverModule),
      },
      {
        path: 'traccar/geofences',
        loadChildren: () => import('../../admin/geofences/geofences.module').then(m => m.GeofencesModule),
      }
      ,
      {
        path: 'traccar/group',
        loadChildren: () => import('../../admin/group/group.module').then(m => m.GroupModule),
      },
      {
        path: 'traccar/notification',
        loadChildren: () => import('../../admin/notification/notification.module').then(m => m.NotificationModule),
      },
      {
        path: 'traccar/devices',
        loadChildren: () => import('../../admin/devices/devices.module').then(m => m.DevicesModule),
      },
      {
        path: 'traccar/maintenance',
        loadChildren: () => import('../../admin/maintenance/maintenance.module').then(m => m.MaintenanceModule),
      },
      {
        path: 'traccar/commands',
        loadChildren: () => import('../../admin/commands/commands.module').then(m => m.CommandsModule),
      },
      
      {
        path: 'traccar/attributes',
        loadChildren: () => import('../../admin/attributes/attributes.module').then(m => m.AttributesModule),
      },
      {
        path: 'inventory',
        loadChildren: () => import('../../admin/inventory/inventory.module').then(m => m.InventoryModule),
      },
      {
        path: 'query',
        loadChildren: () => import('../../admin/query/query.module').then(m => m.QueryModule),
      }
      ,
      {
        path: 'customer',
        loadChildren: () => import('../../admin/customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'report',
        loadChildren: () => import('../../admin/reports/reports.module').then(m => m.ReportsModule),
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
