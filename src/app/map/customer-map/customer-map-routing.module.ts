import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapInfoComponent } from './pages/map-info/map-info.component';

const routes: Routes = [
  {
    path: 'info/:id',
    component: MapInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMapRoutingModule { }
