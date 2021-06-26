import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"
import { FieldSpecs } from '@app/shared/validation/field-spec'
import { Skill } from '../models/skill';
import { SkillService } from '../services/skill.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '@app/core';

@Component({
	templateUrl: './skill-profile.component.html',
	styleUrls: [ './skill-profile.component.scss' ]
})
export class SkillProfileComponent implements OnInit, OnDestroy {
    skillProfile: FormGroup
    loading = false;
    submitted = false;
    errorMessages: object = {};

    errorsDef = {
        'network_error': 'There is error with your network, please check it and try it again',
        'api_error': 'There is error with api, please try it again',
        'skill_level_require': 'Skill level is required'
    }

	constructor(
        private formBuilder: FormBuilder,
        private skillService: SkillService, 
        private alertService: AlertService
	) {}

    get skillProfileForm() {
        return this.skillProfile.controls
    }
    
    get skillLevel() {
        return this.skillProfile.get('skillLevels') as FormArray;
    }

    get isError() {
        return (this.submitted === true && Object.keys(this.errorMessages).length > 0);
    }

	ngOnInit() {
        this.skillProfile = this.formBuilder.group({
            skillName: ['', [FieldSpecs.fieldRequiredValidator('skillNameRequired', true), FieldSpecs.fieldMaxLengthValidator('skillNameMaxLength', true, 100)]],
            skillSchemaName: ['', [FieldSpecs.fieldRequiredValidator('skillSchemaNameRequired', true), FieldSpecs.fieldMaxLengthValidator('skillSchemaNameLength', true, 100)]],
            skillStatus: [true],
            skillLevels: this.formBuilder.array([])
        });

        this.initFormErrorMessage();
	}

    initFormErrorMessage = () => {
        this.errorMessages = {
            'skill_level_require': this.skillLevel.length < 1
        }
    }

    addSkillLevel() {
        const skillLevel = this.formBuilder.group({
            skillLevelName: ['', [FieldSpecs.fieldRequiredValidator('skillLevelName', true), FieldSpecs.fieldMaxLengthValidator('skillLevelName', true, 50)]],
            skillLevelDescription: ['', [FieldSpecs.fieldRequiredValidator('skillLevelDescription', true), FieldSpecs.fieldMaxLengthValidator('skillLevelDescription', true, 2000)]],
        });

        const skillLevels = this.skillProfile.get('skillLevels') as FormArray;
        skillLevels.push(skillLevel);

        this.errorMessages['skill_level_require'] = false;
        this.submitted = false;
    }

    removeKillLevel(skillLevelIndex) {
        this.skillLevel.removeAt(skillLevelIndex);
        if (this.skillLevel.length < 1) {
            this.initFormErrorMessage();
        }
    }

    onSubmit() {
        this.submitted = true;
       
        if (this.skillProfile.valid && !this.skillProfile.pristine && this.skillLevel.length > 0) {
            this.loading = true;
            let skill = this.convertFormDataToSkill(this.skillProfile.value);
            this.skillService.createSkillProfile(skill)
            .pipe(
                catchError(this.handleError)
            )
            .subscribe(result => {
                this.loading = false;
                this.alertService.success('Your skill have been added successfully!');
               // this.router.navigate(['/skills']);
            })
        }
    }

    convertFormDataToSkill(formData: object) {
        let jsonConvert: JsonConvert = new JsonConvert();
        let skill: Skill;
        try{
            skill = jsonConvert.deserializeObject(formData, Skill);
        }catch(e) {
            console.log(e);
        }
        
        return skill;
    }
    
    handleError = (error: HttpErrorResponse) => {
        this.initFormErrorMessage();
        this.loading = false;
        if (error.status === 0) {
            this.errorMessages['network_error'] = true;
            this.alertService.error(this.errorsDef.network_error);
        } else {
            this.errorMessages['api_error'] = true;
            this.alertService.error(this.errorsDef.api_error);
        }
        
        return [];
    }
      

	ngOnDestroy() {
	}
}