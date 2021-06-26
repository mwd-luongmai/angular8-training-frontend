import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from '../../../core/material.module';
import { ActivatedRoute, RouterModule, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../../authentication/login/login.component';
import { HomePageComponent } from '../../home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { getTestUsers } from '@app/core/models/testing/test-users';
import { User } from '@app/core/models';
import { throwError } from 'rxjs';
import { SkillProfileComponent } from './skill-profile.component';
import { AlertService, UserService } from '@app/core';
import { TestUserService } from '@app/core/services/testing/test-user.service';
import { SkillService } from '../services/skill.service';

describe('SkillProfileComponent', () => {
  let component: SkillProfileComponent;
  let fixture: ComponentFixture<SkillProfileComponent>;
  
  let alertServiceSub: Partial<AlertService> = {};
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillProfileComponent ],
      imports: [
        CustomMaterialModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: SkillService, useClass: SkillService},
        {provide: FormBuilder, useClass: FormBuilder},
        {provide: AlertService, useValue: alertServiceSub},
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SkillProfileComponent);
      component = fixture.componentInstance;
      
    });
  }));

  it('should create', () => {
    let a = 'sdf';
    expect(a).toContain('Welcome', '"Welcome ..."');
  });

  
});