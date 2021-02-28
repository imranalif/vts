import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: TopmenuComponent,
    children : [
      { path: 'dashboard', component: DashboardComponent },
      
      {
        path: 'authorization',
        loadChildren: () => import('../../admin/authorization/authorization.module').then(m => m.AuthorizationModule),
      },
      {
        path: 'driver',
        loadChildren: () => import('../../admin/driver/driver.module').then(m => m.DriverModule),
      }
      ,
      {
        path: 'group',
        loadChildren: () => import('../../admin/group/group.module').then(m => m.GroupModule),
      },
      {
        path: 'notification',
        loadChildren: () => import('../../admin/notification/notification.module').then(m => m.NotificationModule),
      },
      {
        path: 'devices',
        loadChildren: () => import('../../admin/devices/devices.module').then(m => m.DevicesModule),
      },
      {
        path: 'maintenance',
        loadChildren: () => import('../../admin/maintenance/maintenance.module').then(m => m.MaintenanceModule),
      },
      {
        path: 'commands',
        loadChildren: () => import('../../admin/commands/commands.module').then(m => m.CommandsModule),
      },
      
      {
        path: 'attributes',
        loadChildren: () => import('../../admin/attributes/attributes.module').then(m => m.AttributesModule),
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
