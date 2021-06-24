import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '@app/core';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ProfileComponent } from './profile/profile.component';
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
      { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
      { path: 'delete',component: DeleteAccountComponent,canActivate: [AuthGuard]},
      { path: 'active/:id', component: ActiveUserComponent}
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
