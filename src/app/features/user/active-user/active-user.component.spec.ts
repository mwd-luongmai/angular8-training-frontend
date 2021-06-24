import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActiveUserComponent } from './active-user.component';
import { UserService } from '../../../core/services/user/user.service';
import { TestUserService } from '../../../core/services/testing/test-user.service';
import { CustomMaterialModule } from '../../../core/material.module';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../../authentication/login/login.component';
import { HomePageComponent } from '../../home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { getTestUsers } from '@app/core/models/testing/test-users';
import { User } from '@app/core/models';
import { throwError } from 'rxjs';

describe('ActiveUserComponent', () => {
  let component: ActiveUserComponent;
  let fixture: ComponentFixture<ActiveUserComponent>;
  const expectedUser: User = getTestUsers()[0]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveUserComponent, LoginComponent, HomePageComponent ],
      imports: [
        CustomMaterialModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: "auth/login", component: LoginComponent},
          { path: "", component: HomePageComponent}
        ])
      ],
      providers: [
        {provide: UserService, useClass: TestUserService},
        {provide: ActivatedRoute, useValue: {snapshot: {paramMap: convertToParamMap({'id': expectedUser.id})}}}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ActiveUserComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the id param from active route', fakeAsync(() => {
    component.ngOnInit()
    tick()
    expect(component.userId).toEqual(expectedUser.id, 'Should receive the user id from active route')
  }))

  it('should call api when the userId is not empty', fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService)
    const activeSpy = spyOn(userServiceSpy, 'active').and.callThrough()

    component.userId = "34u33u4iou3ou343"
    component.ngAfterViewInit()
    tick()
    expect(activeSpy.calls.any()).toBe(true, 'UserService.active should be called')
  }))

  it('should not call api when the userId is empty', fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService)
    const activeSpy = spyOn(userServiceSpy, 'active').and.callThrough()

    component.userId = ""
    component.ngAfterViewInit()
    tick()
    expect(activeSpy.calls.any()).toBe(false, 'UserService.active should not called')
  }))

  it('should set loading and isActived with corrected value when do active request successfully', fakeAsync(() => {
    component.userId = "34u33u4iou3ou343"
    component.ngAfterViewInit()
    tick()
    expect(component.loading).toBe(false, 'Loading should be false')
    expect(component.isActivated).toBe(true, 'isActived should be true')
  }))

  it('should set loading and isActived with corrected value when do active request with error', fakeAsync(() => {
    const userServiceSpy = fixture.debugElement.injector.get(UserService)
    const activeSpy = spyOn(userServiceSpy, 'active').and.callFake(() => {
      return throwError(new Error('Fake error'))
    })

    component.userId = "34u33u4iou3ou343"
    component.ngAfterViewInit()
    tick()
    expect(activeSpy.calls.any()).toBe(true, 'UserService.activeSpy should be called');
    expect(component.loading).toBe(false, 'Loading should be false')
    expect(component.isActivated).toBe(false, 'isActived should be false')
  }))
});
