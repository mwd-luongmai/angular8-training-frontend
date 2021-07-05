import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '@app/core';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { SearchUserComponent } from './search-user/search-user.component';


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
      { path: 'active/:id', component: ActiveUserComponent },
      { path: 'search', component: SearchUserComponent, canActivate: [AuthGuard] },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'delete', component: DeleteAccountComponent, canActivate: [AuthGuard] },
      { path: 'reset-password/:token', component: ResetPasswordComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
    ],
  },

  {
    path: '',
    children: [{ path:'change-password', component: ChangePasswordComponent }],
  },
  {
    path: 'user-skills',
    component: UserSkillsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
