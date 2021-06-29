import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpComponent } from './sign-up/sign-up.component';
import { ActiveUserComponent } from './active-user/active-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      { path: 'sign-up', component: SignUpComponent },
      { path: 'active/:id', component: ActiveUserComponent}
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
