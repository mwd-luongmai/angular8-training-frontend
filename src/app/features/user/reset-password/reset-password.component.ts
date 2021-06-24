import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'


import { AlertService, UserService } from '@core/services'
import { FieldSpecs } from '@app/shared/validation/field-spec'
import { ValidationService } from '@app/shared/validation/validation.service'

@Component({
  selector: 'app-reset-password',
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
    private userService: UserService,
    private alertService: AlertService,
    private validationService: ValidationService
  ) {
   
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.resetToken = routeParams.get('token');
    

    this.resetPassForm = this.formBuilder.group({
      password: ['', [FieldSpecs.passwordValidator]],
      confirmPassword: ['', [FieldSpecs.passwordValidator]]
    },{ validator: this.validationService.matchPasswords })

  }

  get formControls() {
    return this.resetPassForm.controls
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPassForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.resetPassWord(this.resetToken, this.formControls.password.value).subscribe(
      (re) => {
        this.loading = false;
        this.submitted = false;
        this.alertService.success("Your password has been reseted successfully!");
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 5000);
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

  }
}
