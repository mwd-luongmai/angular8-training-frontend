import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {JsonConvert} from "json2typescript"
import { FieldSpecs } from '@app/shared/validation/field-spec'
import { Skill } from '@core/models/skill';
import { SkillService } from '@core/services/skill/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertService } from '@app/core';
import { SkillLevel } from '@core/models/skillLevel';

@Component({
	templateUrl: './skill-profile.component.html',
	styleUrls: [ './skill-profile.component.scss' ]
})
export class SkillProfileComponent implements OnInit {
    skillProfile: FormGroup;
    loading = false;
    submitted = false;
    errorMessages: object = {};
    
    isComponentReady = false;
    skillId: string = '';
    private skillObject: Skill;

    errorsDef = {
        'network_error': 'There is error with your network, please check it and try it again',
        'api_error': 'There is error with api, please try it again',
        'server_message': 'Your skill not found',
        'skill_level_require': 'Skill level is required'
    }

	constructor(
        private formBuilder: FormBuilder,
        private skillService: SkillService, 
        private router: Router,
        private alertService: AlertService,
        private route: ActivatedRoute
	) {}

    get skillProfileForm() {
        return this.skillProfile.controls
    }
    
    get skillLevels() {
        return this.skillProfile.get('skillLevels') as FormArray;
    }

    get isError() {
        return (this.submitted === true && Object.keys(this.errorMessages).length > 0);
    }

	ngOnInit() {
        
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.skillId = params['id'];
                this.skillService.getSkillProfile(params['id'])
                .pipe(
                    catchError(this.handleError)
                )
                .subscribe(skill => {
                    this.skillObject = this.convertFormDataToSkill(skill);
                    this.initForm(this.skillObject);
                    this.isComponentReady = true;
                    this.initFormErrorMessage();
                })
            } else {
                this.initForm();
                this.isComponentReady = true;
                this.initFormErrorMessage();
            }
        });

	}

    initForm = (skill?: Skill) => {
        this.skillProfile = this.formBuilder.group({
            skillName: [skill ? skill.skillName : '', [FieldSpecs.fieldRequiredValidator('skillNameRequired', true), FieldSpecs.fieldMaxLengthValidator('skillNameMaxLength', true, 100)]],
            skillSchemaName: [skill ? skill.skillSchemaName : '', [FieldSpecs.fieldRequiredValidator('skillSchemaNameRequired', true), FieldSpecs.fieldMaxLengthValidator('skillSchemaNameLength', true, 100)]],
            skillStatus: [skill ? skill.skillStatus : true],
            skillLevels: this.formBuilder.array([])
        });

        if (skill) {
            skill.skillLevels.forEach(item => this.onAddSkillLevel(item));
        }

    }

    initFormErrorMessage = () => {
        this.errorMessages = {
            'skill_level_require': this.skillProfile ? this.skillLevels.length < 1 : false
        }
    }

    onAddSkillLevel(skillLevel?: SkillLevel) {
        const skillLevelGroup = this.formBuilder.group({
            skillLevelName: [skillLevel ? skillLevel.skillLevelName : '', [FieldSpecs.fieldRequiredValidator('skillLevelName', true), FieldSpecs.fieldMaxLengthValidator('skillLevelName', true, 50)]],
            skillLevelDescription: [skillLevel ? skillLevel.skillLevelDescription : '', [FieldSpecs.fieldRequiredValidator('skillLevelDescription', true), FieldSpecs.fieldMaxLengthValidator('skillLevelDescription', true, 2000)]],
        });

        
        const levels = this.skillProfile.get('skillLevels') as FormArray;
        levels.push(skillLevelGroup);

        this.errorMessages['skill_level_require'] = false;
        this.submitted = false;
    }

    removeSkillLevel(skillLevelIndex) {
        this.skillLevels.removeAt(skillLevelIndex);
        if (this.skillLevels.length < 1) {
            this.initFormErrorMessage();
        }
    }

    onSubmit() {
        this.submitted = true;
       
        if (this.skillProfile.valid && this.skillLevels.length > 0) {
            if (this.skillObject) {
                this.updateProfile();
            } else {
                this.createSkillProfile();
            }
        }
    }

    createSkillProfile = () => {
        this.loading = true;
        this.skillService.createSkillProfile(this.skillProfile.value)
        .pipe(
            catchError(this.handleError)
        )
        .subscribe(result => {
            this.loading = false;
            this.alertService.success('Your skill has been added successfully !');
            this.router.navigate(['/skills']);
        })
    }

    updateProfile = () => {
        this.loading = true;
        this.skillService.updateSkillProfile(this.skillId, this.skillProfile.value)
        .pipe(
            catchError(this.handleError)
        )
        .subscribe(result => {
            this.loading = false;
            this.alertService.success('Your skill has been updated successfully!');
            this.router.navigate(['/skills']);
        })
    }

    convertFormDataToSkill(formData: object) {
        const jsonConvert: JsonConvert = new JsonConvert();
        const skill: Skill = jsonConvert.deserializeObject(formData, Skill);
        return skill;
    }

    handleError = (error: HttpErrorResponse) => {
        this.initFormErrorMessage();
        this.loading = false;
        this.errorMessages['server_message']  = true;
        this.errorsDef.server_message = error.toString();
        this.alertService.error(error.toString());
        return [];
    }
}
