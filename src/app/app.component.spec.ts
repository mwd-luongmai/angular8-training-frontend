import { TestAuthenticationService } from './core/services/testing/test-authentication.service';
import { AuthenticationService } from '@core/services';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginComponent } from '@app/features/authentication/login/login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared';
import { CustomMaterialModule } from './core';
import { configureTestSuite } from 'src/setupTestBed';

describe('', () => {
	configureTestSuite();

	beforeAll((done) =>
		(async () => {
			TestBed.configureTestingModule({
				declarations: [ AppComponent, LoginComponent ],
				imports: [
					BrowserAnimationsModule,
					SharedModule,
					CustomMaterialModule,
					ReactiveFormsModule,
					HttpClientModule,
					RouterModule.forRoot([]),
					RouterTestingModule.withRoutes([ { path: 'auth/login', component: LoginComponent } ])
				],
				providers: [ AppComponent, { provide: AuthenticationService, useClass: TestAuthenticationService } ]
			});

			await TestBed.compileComponents();
		})()
			.then(done)
			.catch(done.fail)
	);

	describe('AppComponent', () => {
		let component: AppComponent;
		let fixture: ComponentFixture<AppComponent>;

		beforeEach(
			async(async () => {
				createComponent();
			})
		);

		async function createComponent() {
			fixture = TestBed.createComponent(AppComponent);
			component = fixture.componentInstance;

			fixture.detectChanges();

			await fixture.whenStable();
			fixture.detectChanges();
		}

		it(
			'shoul call AppComponent.logout when clicking log out url',
			fakeAsync(() => {
				fixture.detectChanges();

				spyOn(component, 'logout');

				const logoutURL = fixture.debugElement.query(By.css('div.welcome a.mat-button:nth-child(6)'));
				logoutURL.triggerEventHandler('click', null);

				fixture.whenStable().then(() => {
					expect(component.logout).toHaveBeenCalled();
				});
			})
		);

		it(
			'shoul call AuthenticationService.logout function when logging out',
			fakeAsync(() => {
				const authenServiceSpy = fixture.debugElement.injector.get(AuthenticationService);
				const authenLogOut = spyOn(authenServiceSpy, 'logout').and.callThrough();
				component.logout();
				expect(authenLogOut.calls.any()).toBe(true, 'authenLogOut should be called');
			})
		);
	});
});
