import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SkillRoutingModule } from './skill-routing.module'
import { SkillProfileComponent } from './skill-profile/skill-profile.component'
import { SkillListComponent } from './skill-list/skill-list.component'

@NgModule({
  declarations: [SkillProfileComponent, SkillListComponent],
  imports: [CommonModule, SkillRoutingModule],
})
export class SkillModule {}
