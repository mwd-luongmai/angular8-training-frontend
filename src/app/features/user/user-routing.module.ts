import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'

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
    children: [{ path: 'forgot-password', component: ForgotPasswordComponent }],
  },

  {
    path: '',
    children: [{ path: 'reset-password/:token', component: ResetPasswordComponent }],

  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
