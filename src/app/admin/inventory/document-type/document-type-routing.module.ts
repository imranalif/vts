import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { DocumentTypeAddComponent } from './pages/document-type-add/document-type-add.component';
import { DocumentTypeEditComponent } from './pages/document-type-edit/document-type-edit.component';
import { DocumentTypeListComponent } from './pages/document-type-list/document-type-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: DocumentTypeAddComponent,
    canActivate: [AuthGuard],
    data: {roles: 'category_add'}
  },
  {
    path: 'list',
    component: DocumentTypeListComponent,
    canActivate: [AuthGuard],
    data: {roles: 'category_list'}
  },
  {
    path: 'edit/:id',
    component: DocumentTypeEditComponent,
    canActivate: [AuthGuard],
    data: {roles: 'category_edit'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentTypeRoutingModule { }
