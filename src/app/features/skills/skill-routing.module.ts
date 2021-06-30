import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SkillProfileComponent } from './skill-profile/skill-profile.component'

const routes: Routes = [
  {
    path: 'skill-profile', component: SkillProfileComponent
  },
  {
    path: ':id', component: SkillProfileComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillRoutingModule {}
