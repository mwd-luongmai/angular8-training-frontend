import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [{ path: 'login', component: LoginComponent }],
  },

  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },

  {
    path: 'reset-password-confirm',
    component: ResetPasswordConfirmComponent,
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
