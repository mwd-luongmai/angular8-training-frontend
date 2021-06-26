import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks, flush } from '@angular/core/testing';
import { CustomMaterialModule } from '../../../core/material.module';
import { ActivatedRoute, RouterModule, convertToParamMap, Router, NavigationExtras } from '@angular/router';
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

  const skillService = jasmine.createSpyObj('SkillService', ['createSkillProfile']);
  
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
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SkillProfileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show error message when render component', fakeAsync(() => {
    fixture.detectChanges();
    const skillNameError = fixture.nativeElement.querySelector('#skill-name validation-messages');
    expect(skillNameError).toBeNull();

    const skillSchemaError = fixture.nativeElement.querySelector('#skill-schema-name validation-messages');
    expect(skillSchemaError).toBeNull();
  }));
  
  it('should show error message when submit with empty skill name and skill schema name', fakeAsync(() => {
    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();
    
    const skillNameError = fixture.nativeElement.querySelector('#skill-name validation-messages');
    expect(skillNameError.textContent).toContain('Skill name is required.');

    const skillSchemaError = fixture.nativeElement.querySelector('#skill-schema-name validation-messages');
    expect(skillSchemaError.textContent).toContain('Skill schema name is required.');
  }));

  it('should show error message when empty skill skill level', fakeAsync(() => {
    fixture.detectChanges();

    const skillNameInput = fixture.nativeElement.querySelector('#skill-name input');
    skillNameInput.value = 'this is kill name';
    skillNameInput.dispatchEvent(new Event('input'));

    const skillSchemaInput = fixture.nativeElement.querySelector('#skill-schema-name input');
    skillSchemaInput.value = 'this is skill schema name';
    skillSchemaInput.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();

    const skillNameError = fixture.nativeElement.querySelector('#skill-name validation-messages');
    expect(skillNameError).toBeNull();

    const skillSchemaError = fixture.nativeElement.querySelector('#skill-schema-name validation-messages');
    expect(skillSchemaError).toBeNull();

    const fromError = fixture.nativeElement.querySelector('#form-error validation-messages');
    expect(fromError.textContent).toContain('Skill level is required')

  }))

  it('should show skill level name and skill level description when click add skill button', fakeAsync(() => {
    fixture.detectChanges();

    let skillLevelName = fixture.nativeElement.querySelector('#skill-level-name-0');
    expect(skillLevelName).toBeNull();

    let skillLevelDescription = fixture.nativeElement.querySelector('#skill-level-description-0');
    expect(skillLevelDescription).toBeNull();
    
    
    const addSkillButton = fixture.debugElement.nativeElement.querySelector('#add-skill-button');
    addSkillButton.click();
    tick();
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()
    

    expect(component.skillLevels.length).toEqual(1);
    skillLevelName = fixture.debugElement.nativeElement.querySelector('#skill-level-name-0 input');
    expect(skillLevelName).toBeTruthy();

    skillLevelDescription = fixture.nativeElement.querySelector('#skill-level-description-0');
    expect(skillLevelDescription).toBeTruthy();
  }))

  it('should remove skill level and skill level description when click remove that level', fakeAsync(() => {
    fixture.detectChanges();

    let skillLevelName = fixture.nativeElement.querySelector('#skill-level-name-0');
    expect(skillLevelName).toBeNull();

    let skillLevelDescription = fixture.nativeElement.querySelector('#skill-level-description-0');
    expect(skillLevelDescription).toBeNull();
    
    
    let addSkillButton = fixture.debugElement.nativeElement.querySelector('#add-skill-button');
    addSkillButton.click();
    tick();
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()
    

    expect(component.skillLevels.length).toEqual(1);
    skillLevelName = fixture.debugElement.nativeElement.querySelector('#skill-level-name-0 input');
    expect(skillLevelName).toBeTruthy();

    skillLevelDescription = fixture.nativeElement.querySelector('#skill-level-description-0');
    expect(skillLevelDescription).toBeTruthy();

    let rmoveSkillButton = fixture.debugElement.nativeElement.querySelector('#remove-skill-button');
    rmoveSkillButton.click();
    tick();
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()

    expect(component.skillLevels.length).toEqual(0);
    skillLevelName = fixture.debugElement.nativeElement.querySelector('#skill-level-name-0 input');
    expect(skillLevelName).toBeNull();

    skillLevelDescription = fixture.nativeElement.querySelector('#skill-level-description-0');
    expect(skillLevelDescription).toBeNull();
  }))


  it('should not call add skill api when submit with invaild form', fakeAsync(() => {
    // Make the spy return a synchronous Observable with the test data
    fixture.detectChanges();

    const skillNameInput = fixture.nativeElement.querySelector('#skill-name input');
    skillNameInput.value = 'this is kill name';
    skillNameInput.dispatchEvent(new Event('input'));

    const skillSchemaInput = fixture.nativeElement.querySelector('#skill-schema-name input');
    skillSchemaInput.value = 'this is skill schema name';
    skillSchemaInput.dispatchEvent(new Event('input'));

    const addSkillButton = fixture.debugElement.nativeElement.querySelector('#add-skill-button');
    addSkillButton.click();
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()

    const skill: Skill = component.convertFormDataToSkill(component.skillProfile.value);
    let createSkillProfileSpy = skillService.createSkillProfile.and.returnValue(of(skill));

    tick();
    component.onSubmit();
    discardPeriodicTasks()
    flush()
    expect(createSkillProfileSpy.calls.any()).toBe(false, 'createSkillProfileSpy not call');
  }))

  it('should call add skill api when submit with vaild form', fakeAsync(() => {
    // Make the spy return a synchronous Observable with the test data
    fixture.detectChanges();

    const skillNameInput = fixture.nativeElement.querySelector('#skill-name input');
    skillNameInput.value = 'this is kill name';
    skillNameInput.dispatchEvent(new Event('input'));

    const skillSchemaInput = fixture.nativeElement.querySelector('#skill-schema-name input');
    skillSchemaInput.value = 'this is skill schema name';
    skillSchemaInput.dispatchEvent(new Event('input'));

    const addSkillButton = fixture.debugElement.nativeElement.querySelector('#add-skill-button');
    addSkillButton.click();
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()

    const skillLevelName = fixture.debugElement.nativeElement.querySelector('#skill-level-name-0 input');
    skillLevelName.value = 'this is kill level name';
    skillLevelName.dispatchEvent(new Event('input'));

    component.skillLevels.at(0).get('skillLevelDescription').setValue('this is skill level description');
    tick();
    fixture.detectChanges();
    tick();
    discardPeriodicTasks()

    let skill: Skill = component.convertFormDataToSkill(component.skillProfile.value);
    let createSkillProfileSpy = skillService.createSkillProfile.and.returnValue(of(skill));

    tick();
    component.onSubmit();
    discardPeriodicTasks()
    flush()
    expect(createSkillProfileSpy.calls.any()).toBe(true, 'createSkillProfileSpy called');
  }))
});
