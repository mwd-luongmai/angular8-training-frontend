import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '@app/core/guards'
import { DeleteAccountComponent } from './delete-account/delete-account.component'

const routes: Routes = [

  {
    path: '',
    children: [

      {
        path: 'profile/delete',
        component: DeleteAccountComponent,
        canActivate: [AuthGuard],
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
