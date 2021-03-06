import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AlertComponent } from './components/alert/alert.component'
import { LoadingComponent } from './components/loading/loading.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CustomMaterialModule } from '@app/core'
import { InputComponent } from './components/input/input.component'
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component'
import { ChangeThemeComponent } from './components/change-theme/change-theme.component'
import { ChangeLanguageComponent } from './components/change-language/change-language.component'
import { SafePipe } from '@app/safe.pipe'
import { TableBasicResponsiveComponent } from './components/table-basic-responsive/table-basic-responsive.component'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SelectComponent } from './components/select/select.component'

@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent,
    InputComponent,
    ValidationMessagesComponent,
    ChangeThemeComponent,
    ChangeLanguageComponent,
    SafePipe,
    TableBasicResponsiveComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
    CKEditorModule
  ],
  exports: [
    AlertComponent,
    LoadingComponent,
    CustomMaterialModule,
    InputComponent,
    ValidationMessagesComponent,
    ChangeThemeComponent,
    ChangeLanguageComponent,
    TableBasicResponsiveComponent,
    SelectComponent
  ],
})
export class SharedModule {}
