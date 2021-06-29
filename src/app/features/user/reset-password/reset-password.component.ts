import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService, UserService } from "@core/services";
import { FieldSpecs } from "@app/shared/validation/field-spec";
import { FieldValidators } from "@app/shared/validation/field-validator";

@Component({
  selector: "app-reset-password",
  templateUrl: "reset-password.component.html",
  styleUrls: ["reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm: FormGroup;
  loading = false;
  submitted = false;
  resetToken: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.resetToken = routeParams.get("token");

    this.resetPassForm = this.formBuilder.group(
      {
        password: ["", [FieldSpecs.passwordValidator]],
        confirmPassword: ["", [FieldSpecs.passwordValidator]],
      },
      { validator: FieldValidators.matchPassword }
    );
  }

  get formControls() {
    return this.resetPassForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPassForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .resetPassword(this.resetToken, this.formControls.password.value)
      .subscribe(
        (re) => {
          this.loading = false;
          this.submitted = false;
          this.alertService.success(
            "Your password has been reseted successfully!"
          );
          setTimeout(() => {
            this.router.navigate(["/"]);
          }, 5000);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
