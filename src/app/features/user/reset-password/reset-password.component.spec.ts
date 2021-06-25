import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
  flush,
} from "@angular/core/testing";

import { ResetPasswordComponent } from "./reset-password.component";
import { CustomMaterialModule } from "../../../core/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HomePageComponent } from "@app/features/home/home-page/home-page.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertService } from "@app/core/services";
import { UserService } from "../../../core/services/user/user.service";
import { TestUserService } from "../../../core/services/testing/test-user.service";
import { throwError } from "rxjs";

describe("ResetPasswordComponent", () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent, HomePageComponent],
      imports: [
        CustomMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: "", component: HomePageComponent },
        ]),
      ],
      providers: [{ provide: UserService, useClass: TestUserService }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set submmitted flag to true when submit form", () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it("form should be invalid with password is empty", () => {
    component.formControls.password.setValue("");
    expect(component.resetPassForm.invalid).toBeTruthy();
  });

  it("form should be invalid with length of password does not contains least 4 alphabetic characters", () => {
    component.formControls.password.setValue("ab123456");
    expect(component.resetPassForm.invalid).toBeTruthy();
  });

  it("form should be invalid with length of password is less than 8 characters", () => {
    component.formControls.password.setValue("123456");
    expect(component.resetPassForm.invalid).toBeTruthy();
  });

  it("form should be invalid with length of password does not contains least 1 non-alphabetic character", () => {
    component.formControls.password.setValue("abcdefgh");
    expect(component.resetPassForm.invalid).toBeTruthy();
  });

  it("form should be valid with valid data", () => {
    component.formControls.password.setValue("abcd123456");
    component.formControls.confirmPassword.setValue("abcd123456");
    expect(component.resetPassForm.valid).toBeTruthy();
  });

  it("should call api when submit the form with valid data", fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService);
    const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
    const alertSuccessSpy = spyOn(alertServiceSpy, "success").and.callThrough();
    const userSpy = spyOn(userServiceSpy, "resetPassWord").and.callThrough();

    component.formControls.password.setValue("abcd123456");
    component.formControls.confirmPassword.setValue("abcd123456");
    component.onSubmit();
    tick();

    expect(userSpy.calls.any()).toBe(
      true,
      "UserService.resetPassWord should be called"
    );
    expect(alertSuccessSpy.calls.any()).toBe(
      true,
      "AlertService.success should be called"
    );
    expect(component.loading).toBe(false, "Loading status should be false");
    flush();
  }));

  it("should not call api when submit the form with invalid data", fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService);
    const resetPassWordPSpy = spyOn(
      userServiceSpy,
      "resetPassWord"
    ).and.callThrough();

    component.formControls.password.setValue("111");

    component.onSubmit();
    tick();

    expect(resetPassWordPSpy.calls.any()).toBe(
      false,
      "UserService.resetPassWord should not be called"
    );
    expect(component.loading).toBe(false, "Loading status should be false");
    flush();
  }));

  it("should handle error when call api", fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService);
    const resetPassWordSpy = spyOn(
      userServiceSpy,
      "resetPassWord"
    ).and.callFake(() => {
      return throwError(new Error("Fake error"));
    });
    const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
    const alertErrorSpy = spyOn(alertServiceSpy, "error").and.callThrough();

    component.formControls.password.setValue("abcd123456");
    component.formControls.confirmPassword.setValue("abcd123456");
    component.onSubmit();
    tick();

    expect(resetPassWordSpy.calls.any()).toBe(
      true,
      "UserService.resetPassWord should be called"
    );
    expect(alertErrorSpy.calls.any()).toBe(
      true,
      "AlertService.error should be called"
    );
    expect(component.loading).toBe(false, "Loading status should be false");
    flush();
  }));
});
