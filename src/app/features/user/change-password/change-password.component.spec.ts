import { HttpClientModule } from "@angular/common/http";
import {
  async,
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService, AlertService, CustomMaterialModule } from "@app/core";
import { AuthenticationService } from "../../../core/services/authentication/authentication.service";
import { TestAuthenticationService } from "../../../core/services/testing/test-authentication.service";
import { TestUserService } from "@app/core/services/testing/test-user.service";
import { getTestUsers } from "@app/core/models/testing/test-users";
import { throwError } from "rxjs";
import { ChangePasswordComponent } from "./change-password.component";
import { LoginComponent } from "@app/features/authentication/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "@app/shared";
import { configureTestSuite } from "src/setupTestBed";
import { By } from "@angular/platform-browser";

let component: ChangePasswordComponent;
let fixture: ComponentFixture<ChangePasswordComponent>;

describe("ChangePasswordComponent", () => {
  configureTestSuite();

  beforeAll((done) =>
    (async () => {
      TestBed.configureTestingModule({
        declarations: [ChangePasswordComponent, LoginComponent],
        imports: [
          BrowserAnimationsModule,
          SharedModule,
          CustomMaterialModule,
          ReactiveFormsModule,
          RouterModule.forRoot([]),
          HttpClientModule,
          RouterTestingModule.withRoutes([
            { path: "login", component: LoginComponent },
          ]),
        ],
        providers: [
          ChangePasswordComponent,
          {
            provide: AuthenticationService,
            useClass: TestAuthenticationService,
          },
          { provide: UserService, useClass: TestUserService },
        ],
      });

      await TestBed.compileComponents();
    })()
      .then(done)
      .catch(done.fail)
  );

  describe("ChangePasswordComponent", () => {
    beforeEach(async(async () => {
      createComponent();
    }));

    it("should create", () => {
      expect(component).toBeTruthy();
    });

    it("should load current user data", () => {
      const testUser = getTestUsers()[0];
      expect(component.currentUser.name).toEqual(testUser.name);
    });

    it("should not attempt to change password account with an empty password", fakeAsync(() => {
      const userServiceSpy = fixture.debugElement.injector.get(UserService);
      const changePasswordSpy = spyOn(
        userServiceSpy,
        "changePassword"
      ).and.callThrough();

      component.formControls.password.setValue("");

      component.onSubmit();
      tick();

      expect(changePasswordSpy.calls.any()).toBe(
        false,
        "UserService.changePassword should not be called"
      );
      expect(component.loading).toBe(false, "Loading status should be false");
      expect(component.submitted).toBe(true, "Submitted status should be true");
    }));

    it("form should be invalid with length of password is less than 8 characters", () => {
      component.formControls.password.setValue("123456");

      expect(component.changePassForm.invalid).toBeTruthy();
    });

    it("form should be invalid with length of password does not contains least 4 alphabetic characters", () => {
      component.formControls.password.setValue("ab123456");

      expect(component.changePassForm.invalid).toBeTruthy();
    });

    it("form should be invalid with length of password does not contain at least 1 non-alphabetic character", () => {
      component.formControls.password.setValue("abcdefgh");

      expect(component.changePassForm.invalid).toBeTruthy();
    });

    it("should not attempt to change password with an invalid password", fakeAsync(() => {
      const userServiceSpy = fixture.debugElement.injector.get(UserService);
      const deleteAccountSpy = spyOn(
        userServiceSpy,
        "changePassword"
      ).and.callThrough();

      component.formControls.password.setValue("123");

      component.onSubmit();
      tick();
      expect(component.submitted).toBe(true, "Submitted status should be true");

      expect(deleteAccountSpy.calls.any()).toBe(
        false,
        "UserService.changePassword should not be called"
      );

      expect(component.loading).toBe(false, "Loading status should be false");
      expect(component.submitted).toBe(true, "Submitted status should be true");
    }));

    it("should call api with correct password format", fakeAsync(() => {
      const userServiceSpy = fixture.debugElement.injector.get(UserService);
      const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
      const alertSuccessSpy = spyOn(alertServiceSpy, 'success').and.callThrough();
      const changePasswordSpy = spyOn(
        userServiceSpy,
        "changePassword"
      ).and.callThrough();

      component.formControls.oldPassword.setValue("1234mnbv1");
      component.formControls.password.setValue("1234mnbv");
      component.formControls.confirmPassword.setValue("1234mnbv");

      component.onSubmit();
      tick();
  
      expect(changePasswordSpy.calls.any()).toBe(
        true,
        "UserService.changePassword should be called"
      );
      expect(component.loading).toBe(false, "Loading status should be false");
      expect(alertSuccessSpy.calls.any()).toBe(true, 'AlertService.success should be called');
    }));

    it("form should be valid with correct password format", fakeAsync(() => {
      component.formControls.oldPassword.setValue("123453mnbv");
      component.formControls.password.setValue("12345mnbv");
      component.formControls.confirmPassword.setValue("12345mnbv");
      expect(component.changePassForm.valid).toBeTruthy();
      flush();
    }));

    it("should display an error when the password is wrong", fakeAsync(() => {
      const userServiceSpy = fixture.debugElement.injector.get(UserService);
      const changePasswordSpy = spyOn(
        userServiceSpy,
        "changePassword"
      ).and.returnValue(throwError("UserService test failure"));

      component.formControls.password.setValue("wrongP@sswo3d");

      component.onSubmit();
      tick();
      expect(component.submitted).toBe(true, "Submitted status should be true");

      expect(changePasswordSpy.calls.any()).toBe(
        false,
        "UserService.changePassword should not be called"
      );

      expect(component.loading).toBe(false, "Loading status should be true");
      flush();
    }));
  });

  function createComponent() {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    return fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  }
});
