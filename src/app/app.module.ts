import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { AdminMenuModule } from './theme/admin/admin.module';
import { MatDialogComponent } from './shared/mat-dialog/mat-dialog.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    ClientModule,
    AdminMenuModule,
    FlexLayoutModule,
    MatTableExporterModule,
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
