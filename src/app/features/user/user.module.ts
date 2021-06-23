<<<<<<< HEAD
import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomMaterialModule } from '../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======

>>>>>>> 541db62 (fix import)
=======
import { importType } from '@angular/compiler/src/output/output_ast';
=======
>>>>>>> 86c0a18 (fix import)
import { NgModule } from '@angular/core';
>>>>>>> ea0dfd8 (fix import)


@NgModule({
  declarations: [SignUpComponent, DeleteAccountComponent],
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomMaterialModule } from '../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignUpComponent],
>>>>>>> ff5479a (implement feature sign up)
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
