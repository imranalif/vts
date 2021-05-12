import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ProductRoutingModule } from './product-routing.module';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';


@NgModule({
  declarations: [ProductAddComponent, ProductListComponent, ProductEditComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    FlexLayoutModule
  ]
})
export class ProductModule { }
