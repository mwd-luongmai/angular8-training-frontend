import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AuthenticationRoutingModule } from './authentication-routing.module'
import { LoginComponent } from './login/login.component'
import { SharedModule } from '@app/shared'
import { CustomMaterialModule } from '@app/core'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule,
    FormsModule,
  ],
})
export class AuthenticationModule {}
