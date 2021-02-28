import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { AttributesRoutingModule } from './attributes-routing.module';
import { AttributeAddComponent } from './pages/attribute-add/attribute-add.component';
import { AttributeListComponent } from './pages/attribute-list/attribute-list.component';
import { AttributeEditComponent } from './pages/attribute-edit/attribute-edit.component';


@NgModule({
  declarations: [AttributeAddComponent, AttributeListComponent, AttributeEditComponent],
  imports: [
    CommonModule,
    AttributesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AttributesModule { }
