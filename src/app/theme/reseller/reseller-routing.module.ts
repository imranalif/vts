import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { ViewboardComponent } from './viewboard/viewboard.component';

const routes: Routes = [
  {
    path: 'reseller',
    component: TopbarComponent,
    children : [
      { path: 'dashboard', component: ViewboardComponent },
      // { path: 'profile', component: ProfileComponent },
      // { path: 'change-password', component: ChangePasswordComponent },
      
      {
        path: 'reseller-customer',
        loadChildren: () => import('../../reseller/reseller-customer/reseller-customer.module').then(m => m.ResellerCustomerModule),
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellerRoutingModule { }
