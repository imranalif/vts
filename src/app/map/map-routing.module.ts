import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer-map',
    loadChildren: () => import('../map/customer-map/customer-map.module').then(m => m.CustomerMapModule),
  },
  {
    path: 'reseller-map',
    loadChildren: () => import('../map/reseller-map/reseller-map.module').then(m => m.ResellerMapModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
