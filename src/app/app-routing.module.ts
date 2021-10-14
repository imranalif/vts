import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'LoginpageComponent', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
