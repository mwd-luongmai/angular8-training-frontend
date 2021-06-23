import { Component,OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'


import { AlertService, AuthenticationService } from '@core/services'
import { FieldSpecs } from '@app/shared/validation/field-spec'


@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  resetPassForm	: FormGroup
  loading = false
  submitted = false
  resetToken: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
   
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.resetToken = routeParams.get('token');
    

    this.resetPassForm = this.formBuilder.group({
      password: ['', [FieldSpecs.fieldRequiredValidator('passwordRequired')]],
      confirmPassword: ['', [FieldSpecs.fieldRequiredValidator('passwordRequired')]],
    })

  }

  get f() {
    return this.resetPassForm.controls
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPassForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.resetPassWord(this.resetToken, this.f.password.value).subscribe(
      (re) => {
        this.loading = false;
        this.submitted = false;
        this.alertService.success("Your password has been reseted successfully!");
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

  }
}
