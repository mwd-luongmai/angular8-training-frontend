import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '@app/features/authentication/login/login.component';
import { AuthenticationService, UserService, CustomMaterialModule, AlertService } from '@app/core';
import { TestAuthenticationService } from '@app/core/services/testing/test-authentication.service';
import { TestUserService } from '@app/core/services/testing/test-user.service';
import { SearchUserComponent } from './search-user.component';
import { SharedModule, SearchMethod } from '@app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getTestUsers } from '@app/core/models/testing/test-users';
import { throwError } from 'rxjs';
import { configureTestSuite } from 'src/setupTestBed';

let component: SearchUserComponent;
let fixture: ComponentFixture<SearchUserComponent>;

describe('', () => {
	configureTestSuite();

	beforeAll((done) =>
		(async () => {
			TestBed.configureTestingModule({
				declarations: [ SearchUserComponent, LoginComponent ],
				imports: [
					BrowserAnimationsModule,
					SharedModule,
					CustomMaterialModule,
					ReactiveFormsModule,
					RouterModule.forRoot([]),
					HttpClientModule,
					RouterTestingModule.withRoutes([ { path: 'login', component: LoginComponent } ])
				],
				providers: [
					SearchUserComponent,
					{ provide: AuthenticationService, useClass: TestAuthenticationService },
					{ provide: UserService, useClass: TestUserService },
					{ provide: APP_BASE_HREF, useValue: '/' }
				]
			});

			await TestBed.compileComponents();
		})()
			.then(done)
			.catch(done.fail)
	);

	describe('SearchUserComponent', () => {
		beforeEach(
			async(async () => {
				createComponent();
			})
		);

		it(
			'should be no result with empty value',
			fakeAsync(() => {
				component.formControls.keyword.setValue('');
				component.onSubmit();
				tick();
				expect(component.users.length).toEqual(0, 'users result should be empty');
			})
		);

		it(
			'should display users with name infor contains Name search value',
			fakeAsync(() => {
				component.formControls.method.setValue(SearchMethod.Name);
				const keyword = getTestUsers()[0].name;
				component.formControls.keyword.setValue(keyword);
				component.onSubmit();
				tick();
				expect(component.users.length).toBeGreaterThan(0, 'should find matched users');

				component.users.forEach((user) => {
					expect(user.name.toLowerCase()).toContain(
						keyword.toLowerCase(),
						`should find users with name contains '` + keyword + `'`
					);
				});
			})
		);

		it(
			'should display users with username infor contains Username search value',
			fakeAsync(() => {
				component.formControls.method.setValue(SearchMethod.Username);
				const keyword = getTestUsers()[0].username;
				component.formControls.keyword.setValue(keyword);
				component.onSubmit();
				tick();
				expect(component.users.length).toBeGreaterThan(0, 'should find matched users');

				component.users.forEach((user) => {
					expect(user.username.toLowerCase()).toContain(
						keyword.toLowerCase(),
						`should find users with username contains '` + keyword + `'`
					);
				});
			})
		);

		it(
			'should display users with email infor match exactly Email search value',
			fakeAsync(() => {
				component.formControls.method.setValue(SearchMethod.Email);
				const keyword = getTestUsers()[0].email;
				component.formControls.keyword.setValue(keyword);
				component.onSubmit();
				tick();
				expect(component.users.length).toBeGreaterThan(0, 'should find matched users');

				component.users.forEach((user) => {
					expect(user.email.toLowerCase()).toEqual(
						keyword.toLowerCase(),
						`should find users with email is '` + keyword + `'`
					);
				});
			})
		);

		it(
			'should display Not Matching message with no result for search value',
			fakeAsync(() => {
				component.formControls.method.setValue(SearchMethod.Email);
				const keyword = getTestUsers()[0].email + 'Edited';
				component.formControls.keyword.setValue(keyword);

				expect(component.isNotFound).toBe(false, 'not found flag should be turn off');

				component.onSubmit();
				tick();

				expect(component.users.length).toEqual(0, 'users result should be empty');
				expect(component.isNotFound).toBe(true, 'not found flag should be turn on');
			})
		);

		it(
			'should display users with Name, Username, Email information',
			fakeAsync(() => {
				component.formControls.method.setValue(SearchMethod.Email);
				const userTest = getTestUsers()[0];
				const keyword = userTest.email;
				component.formControls.keyword.setValue(keyword);

				component.onSubmit();
				tick();
				expect(component.users.length).toBeGreaterThan(0, 'should find matched users');

				component.users.forEach((user) => {
					expect(user.name).not.toBeUndefined(`should have name in user data`);
					expect(user.username).not.toBeUndefined(`should have username in user data`);
					expect(user.email).not.toBeUndefined(`should have email in user data`);
				});
			})
		);

		it(
			'should display error message when UserService.search fails',
			fakeAsync(() => {
				const userServiceSpy = fixture.debugElement.injector.get(UserService);
				const alertServiceSpy = fixture.debugElement.injector.get(AlertService);
				const searchSpy = spyOn(userServiceSpy, 'search').and.returnValue(
					throwError('UserService test failure')
				);
				const alertErrorSpy = spyOn(alertServiceSpy, 'error').and.callThrough();

				component.formControls.method.setValue(SearchMethod.Email);
				const userTest = getTestUsers()[0];
				const keyword = userTest.email;
				component.formControls.keyword.setValue(keyword);

				component.onSubmit();
				tick();

				expect(searchSpy.calls.any()).toBe(true, 'UserService.search should be called');
				expect(alertErrorSpy.calls.any()).toBe(true, 'AlertService.error should be called');
				expect(component.submitted).toBe(false, 'Submitted status should be false');
				expect(component.isShowResult).toBe(false, 'Show Result flag should be false');
			})
		);

		it(
			'should search normal with specical character in search value',
			fakeAsync(() => {
				component.formControls.method.setValue(SearchMethod.Name);
				const keyword = '{*%!';
				component.formControls.keyword.setValue(keyword);

				component.onSubmit();
				tick();

				expect(component.users.length).toBeGreaterThan(0, 'should find matched users');
				component.users.forEach((user) => {
					expect(user.name.toLowerCase()).toContain(
						keyword.toLowerCase(),
						`should find users with name contains '` + keyword + `'`
					);
				});
			})
		);
	});

	function createComponent() {
		fixture = TestBed.createComponent(SearchUserComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();

		return fixture.whenStable().then(() => {
			fixture.detectChanges();
		});
	}
});
