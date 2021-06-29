import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [{ path: 'sign-up', component: SignUpComponent }],
  },

  {
    path: '',
    children: [{ path:'change-password', component: ChangePasswordComponent }],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
