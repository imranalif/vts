import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  {
    path: 'info',
    component: UserInfoComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
