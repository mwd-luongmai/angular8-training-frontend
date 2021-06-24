import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService, AlertService, CustomMaterialModule } from '@app/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { TestAuthenticationService } from '../../../core/services/testing/test-authentication.service';
import { TestUserService } from '@app/core/services/testing/test-user.service';
import { getTestUsers } from '@app/core/models/testing/test-users';
import { throwError } from 'rxjs';
import { DeleteAccountComponent } from './delete-account.component'
import { LoginComponent } from '@app/features/authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/shared';
import { configureTestSuite } from 'src/setupTestBed';
import { By } from '@angular/platform-browser';

let component: DeleteAccountComponent;
let fixture: ComponentFixture<DeleteAccountComponent>;

describe('DeleteAccountComponent', () => {
    configureTestSuite();

    beforeAll((done) =>
        (async () => {
            TestBed.configureTestingModule({
                declarations: [DeleteAccountComponent, LoginComponent],
                imports: [
                    BrowserAnimationsModule,
                    SharedModule,
                    CustomMaterialModule,
                    ReactiveFormsModule,
                    RouterModule.forRoot([]),
                    HttpClientModule,
                    RouterTestingModule.withRoutes([{ path: 'login', component: LoginComponent }])
                ],
                providers: [
                    DeleteAccountComponent,
                    { provide: AuthenticationService, useClass: TestAuthenticationService },
                    { provide: UserService, useClass: TestUserService }
                ]
            });

            await TestBed.compileComponents();
        })()
            .then(done)
            .catch(done.fail)
    );

    describe('DeleteAccountComponent', () => {
        beforeEach(
            async(async () => {
                createComponent();
            })
        );

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should load current user data', () => {
            const testUser = getTestUsers()[0];
            expect(component.currentUser.name).toEqual(testUser.name);

        });

        it('should display current user name', () => {
            const testUser = getTestUsers()[0];
            const userNameText = fixture.debugElement.query(By.css('b'));
            expect(userNameText.nativeElement.textContent).toEqual(testUser.name)

        });


        it('should not attempt to delete account with an empty password',
            fakeAsync(() => {
                const userServiceSpy = fixture.debugElement.injector.get(UserService);
                const deleteAccountSpy = spyOn(userServiceSpy, 'deleteAccount').and.callThrough();

                component.formControls.password.setValue('');

                component.onSubmit();
                tick();

                expect(deleteAccountSpy.calls.any()).toBe(false, 'UserService.deleteAccount should not be called');
                expect(component.loading).toBe(false, 'Loading status should be false');
                expect(component.submitted).toBe(true, 'Submitted status should be true');
            })
        );

        it('form should be invalid with length of password is less than 8 characters', () => {

            component.formControls.password.setValue('123456')

            expect(component.passwordForm.invalid).toBeTruthy()
        })


        it('form should be invalid with length of password does not contains least 4 alphabetic characters', () => {

            component.formControls.password.setValue('ab123456')

            expect(component.passwordForm.invalid).toBeTruthy()
        })

        it('form should be invalid with length of password does not contain at least 1 non-alphabetic character', () => {

            component.formControls.password.setValue('abcdefgh')

            expect(component.passwordForm.invalid).toBeTruthy()
        })

        it('should not attempt to delete account with an invalid password',
            fakeAsync(() => {
                const userServiceSpy = fixture.debugElement.injector.get(UserService);
                const deleteAccountSpy = spyOn(userServiceSpy, 'deleteAccount').and.callThrough();

                component.formControls.password.setValue('123');

                component.onSubmit();
                tick();
                expect(component.submitted).toBe(true, 'Submitted status should be true');

                expect(deleteAccountSpy.calls.any()).toBe(false, 'UserService.deleteAccount should not be called');

                expect(component.loading).toBe(false, 'Loading status should be false');
                expect(component.submitted).toBe(true, 'Submitted status should be true');

            })
        );

        it('should call api with correct password format',
            fakeAsync(() => {
                const userServiceSpy = fixture.debugElement.injector.get(UserService);
                const deleteAccountSpy = spyOn(userServiceSpy, 'deleteAccount').and.callThrough();

                component.formControls.password.setValue('123');

                component.onSubmit();
                tick();
                expect(component.submitted).toBe(true, 'Submitted status should be true');

                expect(deleteAccountSpy.calls.any()).toBe(false, 'UserService.deleteAccount should not be called');

                expect(component.loading).toBe(false, 'Loading status should be false');
                expect(component.submitted).toBe(true, 'Submitted status should be true');




            })

        )

        it('form should be valid with correct password format',
            fakeAsync(() => {
               
             component.formControls.password.setValue('123vsrer%fdf');

               
             expect(component.passwordForm.valid).toBeTruthy()
                flush()

            })
        );

        it('should display an error when the password is wrong',
            fakeAsync(() => {
                const userServiceSpy = fixture.debugElement.injector.get(UserService);
                const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
                const alertErrorSpy = spyOn(alertServiceSpy, 'error').and.callThrough();

                const deleteAccountSpy = spyOn(userServiceSpy, 'deleteAccount').and.returnValue(
                    throwError('UserService test failure')
                );

                component.formControls.password.setValue('wrongP@sswo3d');

                component.onSubmit();
                tick();
                expect(component.submitted).toBe(true, 'Submitted status should be true');

                expect(deleteAccountSpy.calls.any()).toBe(true, 'UserService.deleteAccount should be called');
                expect(alertErrorSpy.calls.any()).toBe(true, 'Alert error service called');

                expect(component.loading).toBe(false, 'Loading status should be true');
                flush();
            })
        );

    });

    function createComponent() {
        fixture = TestBed.createComponent(DeleteAccountComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        return fixture.whenStable().then(() => {
            fixture.detectChanges();
        });
    }
});
