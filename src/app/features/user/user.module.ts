import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@app/shared'
import { CustomMaterialModule } from '@app/core'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DeleteAccountComponent],
  imports: [UsersRoutingModule,
    CommonModule,SharedModule,CustomMaterialModule,ReactiveFormsModule
  ]
})
export class UserModule { }
