import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'


import { AlertService, AuthenticationService } from '@core/services'
import { FieldSpecs } from '@app/shared/validation/field-spec'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

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
      email: ['', [FieldSpecs.fieldRequiredValidator('emailRequired'), Validators.email]],
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
