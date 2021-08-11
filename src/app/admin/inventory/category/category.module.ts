import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [CategoryAddComponent, CategoryListComponent, CategoryEditComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule

  ]
})
export class CategoryModule { }
