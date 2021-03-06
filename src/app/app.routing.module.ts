import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren:
      () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'skills',
    loadChildren:
      () => import('./features/skills/skill.module').then(m => m.SkillModule),
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/home' },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
