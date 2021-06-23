import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldSpecs } from '@app/shared/validation/field-spec';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../core/services/alert/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup
  submitted: boolean = false
  loading: boolean = false
  returnURL: string = ""
  signUpSub: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [FieldSpecs.nameValidator]],
      username: ['', [FieldSpecs.usernameValidator]],
      email: ['', [FieldSpecs.emailValidator]],
      password: ['', [FieldSpecs.passwordValidator]]
    })

    this.returnURL = this.activeRoute.snapshot.queryParams['returnUrl'] || '/'
  }

  get formControls(){
    return this.signUpForm.controls
  }

  onSubmit(){
    this.submitted = true

    if(this.signUpForm.invalid){
      return
    }

    this.loading = true
    const name = this.formControls.name.value
    const username = this.formControls.username.value
    const email = this.formControls.email.value
    const password = this.formControls.password.value

    this.signUpSub = this.authenticateService.signUp(name, username, email, password)
    .subscribe(
      () => {
        this.alertService.success("Welcome to SWATANG. Please check your email and make a verification.")
        this.loading = false
        setTimeout(() => this.router.navigate([this.returnURL]), 3000)
      },
      error => {
        this.alertService.error(error)
        this.loading = false
      }
    )
  }

  ngOnDestroy(): void {
    if(this.signUpSub){
      this.signUpSub.unsubscribe()
    }
  }
}
