import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { AlertService, UserService } from "@core/services";
import { FieldSpecs } from "@app/shared/validation/field-spec";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "forgot-password",
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
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.forgotPassForm = this.formBuilder.group({
      email: ['', [FieldSpecs.emailValidator]],
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
    this.userService.forgotPassWord(this.formControls.email.value, 'http://localhost').subscribe(
      (re) => {
        this.loading = false;
        this.submitted = false;
        this.alertService.success("Please check your email to reset your password");
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }
}
