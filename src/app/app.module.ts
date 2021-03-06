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
import { MapModule } from './map/map.module';
import { AdminMenuModule } from './theme/admin/admin.module';
import { ResellerMenuModule } from './theme/reseller/reseller.module';
import { MatDialogComponent } from './shared/mat-dialog/mat-dialog.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HashLocationStrategy, LocationStrategy,PathLocationStrategy } from '@angular/common';
import { DragDropModule } from "@angular/cdk/drag-drop";
import {NgxImageCompressService} from "ngx-image-compress";



@NgModule({
  declarations: [
    AppComponent,
    MatDialogComponent,
  
  
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
    MapModule,
    AdminMenuModule,
    ResellerMenuModule,
    FlexLayoutModule,
    MatTableExporterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DragDropModule
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },{provide: LocationStrategy, useClass: HashLocationStrategy},NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
