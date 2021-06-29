import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomMaterialModule } from '../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActiveUserComponent } from './active-user/active-user.component';

@NgModule({
  declarations: [SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent, DeleteAccountComponent, ActiveUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }