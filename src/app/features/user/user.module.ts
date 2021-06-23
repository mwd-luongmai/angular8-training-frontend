import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomMaterialModule } from '../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignUpComponent],
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
