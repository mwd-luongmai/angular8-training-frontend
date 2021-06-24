import { async, ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { CustomMaterialModule } from '../../../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from '@app/features/home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from '@app/core/services';
import { UserService } from '../../../core/services/user/user.service';
import { TestUserService } from '../../../core/services/testing/test-user.service';
import { throwError } from 'rxjs';

describe('ResetPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent, HomePageComponent ],
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
        {provide: UserService, useClass: TestUserService}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ForgotPasswordComponent);
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

  it('form should be invalid with email is empty', () => {
    component.formControls.email.setValue('')
    expect(component.forgotPassForm.invalid).toBeTruthy()
  })

  it('form should be invalid with length of invalid email format', () => {
    component.formControls.email.setValue('test@gmail')
    expect(component.forgotPassForm.invalid).toBeTruthy()
  })


  it('should call api when submit the form with valid data', fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService)
    const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
    const alertSuccessSpy = spyOn(alertServiceSpy, 'success').and.callThrough();
    const userSpy = spyOn(userServiceSpy, 'forgotPassWord').and.callThrough();
    
    component.formControls.email.setValue('test@gmail.com')
    component.onSubmit()
    tick()

    expect(userSpy.calls.any()).toBe(true, 'UserService.forgotPassWord should be called');
    expect(alertSuccessSpy.calls.any()).toBe(true, 'AlertService.success should be called');
    expect(component.loading).toBe(false, 'Loading status should be false');
    flush()
  }))

  it('should not call api when submit the form with invalid data', fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService)
    const userSpy = spyOn(userServiceSpy, 'forgotPassWord').and.callThrough();
   
    component.formControls.email.setValue('')
    component.onSubmit()
    tick()

    expect(userSpy.calls.any()).toBe(false, 'UserService.forgotPassWord should not be called');
    expect(component.loading).toBe(false, 'Loading status should be false');
    flush()
  }))

  it('should handle error when call api', fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService)
    const forgotSpy = spyOn(userServiceSpy, 'forgotPassWord').and.callFake(() => {
      return throwError(new Error('Fake error'));
    });
    const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
    const alertErrorSpy = spyOn(alertServiceSpy, 'error').and.callThrough();
    
    component.formControls.email.setValue('test123123@gmail.com')
  
    component.onSubmit()
    tick()

    expect(forgotSpy.calls.any()).toBe(true, 'UserService.signUp should be called');
    expect(alertErrorSpy.calls.any()).toBe(true, 'AlertService.error should be called');
    expect(component.loading).toBe(false, 'Loading status should be false');
    flush()
  }))
});
