import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import {
  User,
  AlertService,
  AuthenticationService,
  UserService,
} from '@app/core'
import { FieldSpecs } from '@app/shared/validation/field-spec'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  currentUser: User
  updateProfileForm: FormGroup
  loading = false
  submitted = false
  currentUserSubscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      x => {
        this.currentUser = x
      }
    )
  }

  ngOnInit() {
    console.log(this.currentUser)
    this.updateProfileForm = this.formBuilder.group({
      id: [''],
      name: ['', FieldSpecs.nameValidator],
      bio: ['', FieldSpecs.profileBioValidator],
      company: ['', FieldSpecs.companyValidator],
      location: ['', FieldSpecs.profileLocationValidator],
    })
    this.loadProfileData(this.currentUser)
  }

  get formControls() {
    return this.updateProfileForm.controls
  }

  onSubmit() {
    this.submitted = true
    this.loading = true

    if (this.updateProfileForm.invalid) {
      this.loading = false
      return
    }
    console.log(this.updateProfileForm.value);
    this.userService.update(this.updateProfileForm.value).subscribe(
      _ => {
        this.alertService.success('Profile updated successfully.', true)
        this.submitted = false
        this.loading = false
        // this.router.navigate(['/'])
      },
      error => {
        this.alertService.error(error)
        this.submitted = false
        this.loading = false
      }

    )

   
  }

  private loadProfileData(user: User): void {
    if (user) {
      this.updateProfileForm.setValue({
        id: !!user.id ? user.id : '',
        name: !!user.name ? user.name : '',
        bio: !!user.bio ? user.bio : '',
        company: !!user.company ? user.company : '',
        location: !!user.location ? user.location : '',
      })

      this.cdRef.detectChanges()
    }
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe()
    }
  }
}
