import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomMaterialModule } from '../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { DialogComponent } from './dialog/dialog.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  entryComponents: [UserSkillsComponent, DialogComponent],
  declarations: [SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent, DeleteAccountComponent, ActiveUserComponent, SearchUserComponent, UserSkillsComponent, ProfileComponent, ChangePasswordComponent, DialogComponent],
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