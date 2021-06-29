import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomMaterialModule } from '../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [SignUpComponent, DeleteAccountComponent, ChangePasswordComponent],
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