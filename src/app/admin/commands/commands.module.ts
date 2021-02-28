import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { CommandsRoutingModule } from './commands-routing.module';
import { CommandAddComponent } from './pages/command-add/command-add.component';
import { CommandListComponent } from './pages/command-list/command-list.component';
import { CommandEditComponent } from './pages/command-edit/command-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [CommandAddComponent, CommandListComponent, CommandEditComponent],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CommandsModule { }
