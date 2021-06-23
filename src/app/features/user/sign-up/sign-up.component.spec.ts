import { async, ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { CustomMaterialModule } from '../../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from '@app/features/home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from '@app/core/services';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { TestAuthenticationService } from '../../../core/services/testing/test-authentication.service';
import { throwError } from 'rxjs';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent, HomePageComponent ],
      imports: [
        CustomMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([ { path: '', component: HomePageComponent } ])
      ],
      providers: [
        {provide: AuthenticationService, useClass: TestAuthenticationService}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SignUpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submmitted flag to true when submit form', () => {
    component.onSubmit()
    expect(component.submitted).toBeTruthy()
  })

  it('form should be invalid with name is empty', () => {
    component.formControls.name.setValue('')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abc123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with username is empty', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abc123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with email is empty', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('')
    component.formControls.password.setValue('abcd123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with password is empty', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with length of username is less than 6 character', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('test')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abcd123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with length of invalid email format', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail')
    component.formControls.password.setValue('abcd123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with length of password does not contains least 4 alphabetic characters', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail')
    component.formControls.password.setValue('ab123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with length of password is less than 8 characters', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail')
    component.formControls.password.setValue('123456')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be invalid with length of password does not contains least 1 non-alphabetic character', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail')
    component.formControls.password.setValue('abcdefgh')

    expect(component.signUpForm.invalid).toBeTruthy()
  })

  it('form should be valid with valid data', () => {
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abcd123456')

    expect(component.signUpForm.valid).toBeTruthy()
  })

  it('should call api when submit the form with valid data', fakeAsync(() => {
    const authServiceSpy = fixture.debugElement.injector.get(AuthenticationService)
    const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
    const alertSuccessSpy = spyOn(alertServiceSpy, 'success').and.callThrough();
    const signUpSpy = spyOn(authServiceSpy, 'signUp').and.callThrough();
    
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abcd123456')
    component.onSubmit()
    tick()

    expect(signUpSpy.calls.any()).toBe(true, 'AuthenticationService.signUp should be called');
    expect(alertSuccessSpy.calls.any()).toBe(true, 'AlertService.success should be called');
    expect(component.loading).toBe(false, 'Loading status should be false');
    flush()
  }))

  it('should not call api when submit the form with invalid data', fakeAsync(() => {
    const authServiceSpy = fixture.debugElement.injector.get(AuthenticationService)
    const signUpSpy = spyOn(authServiceSpy, 'signUp').and.callThrough();
    
    component.formControls.name.setValue('')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abcd123456')
    component.onSubmit()
    tick()

    expect(signUpSpy.calls.any()).toBe(false, 'AuthenticationService.signUp should not be called');
    expect(component.loading).toBe(false, 'Loading status should be false');
    flush()
  }))

  it('should handle error when call api', fakeAsync(() => {
    const authServiceSpy = fixture.debugElement.injector.get(AuthenticationService)
    const signUpSpy = spyOn(authServiceSpy, 'signUp').and.callFake(() => {
      return throwError(new Error('Fake error'));
    });
    const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
    const alertErrorSpy = spyOn(alertServiceSpy, 'error').and.callThrough();
    
    component.formControls.name.setValue('test')
    component.formControls.username.setValue('testing')
    component.formControls.email.setValue('test@gmail.com')
    component.formControls.password.setValue('abcd123456')
    component.onSubmit()
    tick()

    expect(signUpSpy.calls.any()).toBe(true, 'AuthenticationService.signUp should be called');
    expect(alertErrorSpy.calls.any()).toBe(true, 'AlertService.error should be called');
    expect(component.loading).toBe(false, 'Loading status should be false');
    flush()
  }))
});
