import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopmenuComponent } from './topmenu/topmenu.component';

const routes: Routes = [
  {
    path: 'admin',
    component: TopmenuComponent,
    children : [
      //{ path: 'dashboard', redirectTo: 'DashboardComponent', pathMatch: 'full' },
      
      {
        path: 'authorization',
        loadChildren: () => import('../../admin/authorization/authorization.module').then(m => m.AuthorizationModule),
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
