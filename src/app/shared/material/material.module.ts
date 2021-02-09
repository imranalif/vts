import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

const matComponent = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatMenuModule,
  MatToolbarModule,
  MatRadioModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatAutocompleteModule,
  // OwlDateTimeModule, OwlNativeDateTimeModule,
  MatProgressSpinnerModule,
  // MatDatetimepickerModule,

  MatSortModule,
   MatPaginatorModule,
   MatDialogModule,
   MatGridListModule,
   MatExpansionModule,
   MatSnackBarModule,
   MatTabsModule

];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matComponent
  ],
  exports: [matComponent]
})
export class MaterialModule { }
