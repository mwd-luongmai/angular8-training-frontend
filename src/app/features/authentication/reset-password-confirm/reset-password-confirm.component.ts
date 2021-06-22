import { Component,OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'


import { AlertService, AuthenticationService } from '@core/services'
import { FieldSpecs } from '@app/shared/validation/field-spec'


@Component({
  selector: 'reset-password-confirm',
  templateUrl: 'reset-password-confirm.component.html',
  styleUrls: ['reset-password-confirm.component.scss'],
})
export class ResetPasswordConfirmComponent implements OnInit {

  resetPassForm	: FormGroup
  loading = false
  submitted = false
  returnUrl: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
   
  }

  ngOnInit() {
    this.resetPassForm = this.formBuilder.group({
      password: ['', [FieldSpecs.fieldRequiredValidator('passwordRequired')]],
      confirmPassword: ['', [FieldSpecs.fieldRequiredValidator('passwordRequired')]],
    })

  }

  get f() {
    return this.resetPassForm.controls
  }

  onSubmit() {
    this.submitted = true

    if (this.resetPassForm.invalid) {
      return
    }

    this.loading = true

  }
}
