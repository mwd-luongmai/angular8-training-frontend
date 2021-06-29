import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks, flush } from '@angular/core/testing';
import { CustomMaterialModule } from '../../../core/material.module';
import { ActivatedRoute, RouterModule, convertToParamMap, Router, NavigationExtras, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { SkillProfileComponent } from './skill-profile.component';
import { AlertService, UserService } from '@app/core';
import { SkillService } from '../services/skill.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Skill } from '../models/skill';
import { Observable,  of } from 'rxjs';

describe('SkillProfileComponent', () => {
  let component: SkillProfileComponent;
  let fixture: ComponentFixture<SkillProfileComponent>;

  const routerSub: Partial<Router> = {
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
      return new Promise(()=>{
        return true;
      });
    }
  };
  const alertServiceSub: Partial<AlertService> = {
    success() {
    }
  };


  const skillService = jasmine.createSpyObj('SkillService', ['createSkillProfile', 'getSkillProfile', 'updateSkillProfile']);
  const activeRoute = jasmine.createSpyObj('ActivatedRoute', ['createSkillProfile']);
  activeRoute.params = of({id:'60dacbc57faeaf1c0c0526d6'});

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
        CKEditorModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: SkillService, useValue: skillService},
        {provide: Router, useValue: routerSub},
        {provide: FormBuilder, useClass: FormBuilder},
        {provide: AlertService, useValue: alertServiceSub},
        {provide: ActivatedRoute, useValue: activeRoute}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SkillProfileComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should call api getSkillProfileSpy', fakeAsync(() => {
    const skillObject = {
      "skillName": "php skills",
      "skillSchemaName": "programing skill",
      "skillStatus": true,
      "skillLevels": [
          {
              "_id": "60dacbc57faeaf1c0c0526d7",
              "skillLevelName": "level 1",
              "skillLevelDescription": "<p>description of level 1</p>"
          },
          {
              "_id": "60dacbc57faeaf1c0c0526d8",
              "skillLevelName": "level 2",
              "skillLevelDescription": "<p>description of level 2</p>"
          }
      ],
    }
    // Make the spy return a synchronous Observable with the test data

    const getSkillSpy = skillService.getSkillProfile.and.returnValue(of(skillObject));
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()
    expect(getSkillSpy.calls.any()).toBe(true, 'getSkillProfileSpy called');
  }))

  it('should display value correct with object form API', fakeAsync(() => {
    const skillObject = {
      "skillName": "php skills",
      "skillSchemaName": "programing skill",
      "skillStatus": true,
      "skillLevels": [
          {
              "_id": "60dacbc57faeaf1c0c0526d7",
              "skillLevelName": "level 1",
              "skillLevelDescription": "<p>description of level 1</p>"
          },
          {
              "_id": "60dacbc57faeaf1c0c0526d8",
              "skillLevelName": "level 2",
              "skillLevelDescription": "<p>description of level 2</p>"
          }
      ],
    }
    // Make the spy return a synchronous Observable with the test data

    fixture.detectChanges();
    tick();
    
    const skillNameInput = fixture.nativeElement.querySelector('#skill-name input');
    expect(skillNameInput.value).toEqual(skillObject.skillName)

    const skillSchemaInput = fixture.nativeElement.querySelector('#skill-schema-name input');
    expect(skillSchemaInput.value).toEqual(skillObject.skillSchemaName)

    const skillLevelName = fixture.debugElement.nativeElement.querySelector('#skill-level-name-0 input');
    expect(skillLevelName.value).toEqual(skillObject.skillLevels[0].skillLevelName)

    const skillLevelDescription = fixture.nativeElement.querySelector('#skill-level-description-0');
    const present = skillLevelDescription.querySelector('div[class="ck ck-editor__main"]');
    expect(skillObject.skillLevels[0].skillLevelDescription).toContain(present.textContent);

    discardPeriodicTasks()
  }))

  it('should call api to update skill when click submit', fakeAsync(() => {
    const skillObject = {
      "skillName": "php skills",
      "skillSchemaName": "programing skill",
      "skillStatus": true,
      "skillLevels": [
          {
              "_id": "60dacbc57faeaf1c0c0526d7",
              "skillLevelName": "level 1",
              "skillLevelDescription": "<p>description of level 1</p>"
          },
          {
              "_id": "60dacbc57faeaf1c0c0526d8",
              "skillLevelName": "level 2",
              "skillLevelDescription": "<p>description of level 2</p>"
          }
      ],
    }
    // Make the spy return a synchronous Observable with the test data

    fixture.detectChanges();
    tick();
    
    const updateSkillSpy = skillService.updateSkillProfile.and.returnValue(of('Your skill have been updated successfully!'));
    component.onSubmit();
    fixture.detectChanges();
    tick();

    expect(updateSkillSpy.calls.any()).toBe(true, 'updateSkillProfile called');
    discardPeriodicTasks()
  }))
});
