import {
  FormGroup,
  FormBuilder,
} from "@angular/forms";

import { AlertService, UserService, AuthenticationService } from "@core/services";
import { FieldSpecs } from "@app/shared/validation/field-spec";
import { Component, OnInit } from "@angular/core";
import { FieldValidators } from "@app/shared/validation/field-validator";
import { User } from '@core/models'
import { Subscription } from 'rxjs'

@Component({
  selector: "app-change-password",
  templateUrl: "change-password.component.html",
  styleUrls: ["change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  changePassForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  currentUser: User
  currentUserSubscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private authenticateService: AuthenticationService
  ) {}

  ngOnInit() {

    this.currentUserSubscription = this.authenticateService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    )

    this.changePassForm = this.formBuilder.group({
      oldPassword: ['', [FieldSpecs.passwordValidator]],
      password: ['', [FieldSpecs.passwordValidator]],
      confirmPassword: ['', [FieldSpecs.passwordValidator]],
    }, { validator: FieldValidators.matchPassword });
  }

  ngOnDestroy() {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe()
    }
  }



  get formControls() {
    return this.changePassForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.changePassForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.changePassword(this.currentUser.id,  this.formControls.oldPassword.value, this.formControls.password.value).subscribe(
      (re) => {
        this.loading = false;
        this.submitted = false;
        this.alertService.success("Your password has been reset successfully");
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
