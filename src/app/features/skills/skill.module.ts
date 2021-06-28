import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CustomMaterialModule } from '@app/core'
import { SharedModule } from '@app/shared'
import { SkillRoutingModule } from './skill-routing.module'
import { SkillProfileComponent } from './skill-profile/skill-profile.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [SkillProfileComponent],
  imports: [
        CommonModule, 
        SkillRoutingModule, 
        CustomMaterialModule,
        SharedModule,
        ReactiveFormsModule,
        CKEditorModule,
        FormsModule
    ],
})
export class SkillModule {}
