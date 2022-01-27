import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from './pages/map-view/map-view.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: MapViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellerMapRoutingModule { }
