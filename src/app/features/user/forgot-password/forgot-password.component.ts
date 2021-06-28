import { FormGroup, FormBuilder } from "@angular/forms";
import { AlertService, UserService } from "@core/services";
import { FieldSpecs } from "@app/shared/validation/field-spec";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgot-password",
  templateUrl: "forgot-password.component.html",
  styleUrls: ["forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.forgotPassForm = this.formBuilder.group({
      email: ["", [FieldSpecs.emailValidator]],
    });
  }

  get formControls() {
    return this.forgotPassForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPassForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .forgotPassword(this.formControls.email.value, window.location.host)
      .subscribe(
        (re) => {
          this.loading = false;
          this.submitted = false;
          this.alertService.success(
            "Please check your email to reset your password"
          );
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
