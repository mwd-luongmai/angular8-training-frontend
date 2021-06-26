import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SkillProfileComponent } from './skill-profile/skill-profile.component'
import { SkillListComponent } from './skill-list/skill-list.component'

const routes: Routes = [
  {
    path: '', component: SkillListComponent
  },
  {
    path: 'skill-profile/:id', component: SkillProfileComponent
  },
  {
    path: 'skill-profile', component: SkillProfileComponent
  },
  {
    path: 'skill-assign/:id', component: SkillProfileComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillRoutingModule {}
