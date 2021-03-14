import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';

import { AttributesRoutingModule } from './attributes-routing.module';
import { AttributeAddComponent } from './pages/attribute-add/attribute-add.component';
import { AttributeListComponent } from './pages/attribute-list/attribute-list.component';
import { AttributeEditComponent } from './pages/attribute-edit/attribute-edit.component';
import { AttributeDeviceComponent } from './pages/attribute-device/attribute-device.component';
import { AttributeGroupComponent } from './pages/attribute-group/attribute-group.component';
import { AttributeUserComponent } from './pages/attribute-user/attribute-user.component';


@NgModule({
  declarations: [AttributeAddComponent, AttributeListComponent, AttributeEditComponent, AttributeDeviceComponent, AttributeGroupComponent, AttributeUserComponent],
  imports: [
    CommonModule,
    AttributesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ]
})
export class AttributesModule { }
