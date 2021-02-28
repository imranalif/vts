import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { CommandAddComponent } from './pages/command-add/command-add.component';
import { CommandEditComponent } from './pages/command-edit/command-edit.component';
import { CommandListComponent } from './pages/command-list/command-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: CommandAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'command_add'}
  },
  {
    path: 'list',
    component: CommandListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'command_list'}
  },
  {
    path: 'edit/:id',
    component: CommandEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'command_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandsRoutingModule { }
