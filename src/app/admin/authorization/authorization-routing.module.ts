import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';

const routes: Routes = [
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  
  },
  {
    path: 'group',
    loadChildren: () => import('./permission-group/permission-group.module').then(m => m.PermissionGroupModule),
    
  },
  {
    path: 'item',
    loadChildren: () => import('./permission-group-item/permission-group-item.module').then(m => m.PermissionGroupItemModule),
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
