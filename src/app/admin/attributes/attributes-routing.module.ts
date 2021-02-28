import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/auth.guard';
import { AttributeAddComponent } from './pages/attribute-add/attribute-add.component';
import { AttributeEditComponent } from './pages/attribute-edit/attribute-edit.component';
import { AttributeListComponent } from './pages/attribute-list/attribute-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: AttributeAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'attribute_add'}
  },
  {
    path: 'list',
    component: AttributeListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'attribute_list'}
  },
  {
    path: 'edit/:id',
    component: AttributeEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'attribute_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributesRoutingModule { }
