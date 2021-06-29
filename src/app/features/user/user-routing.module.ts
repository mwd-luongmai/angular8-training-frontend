import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { AuthGuard } from '../../core/guards/auth.guard';

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
      { path: 'active/:id', component: ActiveUserComponent},
      { path: 'search', component: SearchUserComponent, canActivate: [AuthGuard]}
    ],
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
