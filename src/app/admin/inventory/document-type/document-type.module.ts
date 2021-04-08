import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentTypeRoutingModule } from './document-type-routing.module';

import { DocumentTypeListComponent } from './pages/document-type-list/document-type-list.component';
import { DocumentTypeEditComponent } from './pages/document-type-edit/document-type-edit.component';


@NgModule({
  declarations: [ DocumentTypeListComponent, DocumentTypeEditComponent],
  imports: [
    CommonModule,
    DocumentTypeRoutingModule
  ]
})
export class DocumentTypeModule { }
