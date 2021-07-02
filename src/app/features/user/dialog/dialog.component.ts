import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertService, AuthenticationService, User } from '@app/core';
import { Skill } from '@app/features/skills/models/skill';
import { SkillLevel } from '@app/features/skills/models/skillLevel';
import { SkillService } from '@app/features/skills/services/skill.service';
import { JsonConvert } from 'json2typescript';
import { Observable, of } from 'rxjs';
import { map,
  debounceTime,
  distinctUntilChanged, } from 'rxjs/operators';

@Component({
  templateUrl: 'dialog.component.html',
})

export class DialogComponent  implements OnInit{
  assignSkillForm: FormGroup;
  skills$!: Observable<Skill[]>;
  skillLevels!: SkillLevel[];
  currentUser: User;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {skill: Skill, selectedLevel: string, type: 'update'| 'add'| 'delete', id?: string,  notify: Observable<string>},
    private formBuilder: FormBuilder,
    private skillService: SkillService,
    private alertService: AlertService,
    private authenticateService: AuthenticationService) {}

  ngOnInit() {
    this.currentUser = this.authenticateService.currentUserValue;

    if (this.data && this.data.skill) {
      this.skillLevels = this.data.skill.skillLevels;
      this.skills$ = of([this.data.skill]);
    }

    this.assignSkillForm = this.formBuilder.group({
      skillName: [this.data.skill ? this.data.skill: ''],
      skillLevel: [this.data.selectedLevel? this.data.selectedLevel: '']
    });

    this.assignSkillForm.get('skillName').valueChanges.subscribe(
      value => {
        if (value instanceof Skill) {
          this.skillLevels = value.skillLevels;
        }
      }
    );

  }

  convertJson(skillArray) {
    const jsonConvert: JsonConvert = new JsonConvert();
    const lstSkills: Skill[] = jsonConvert.deserializeArray(skillArray, Skill);
    return lstSkills;
  }

  submitForm = () => {
    if (this.data && this.data.skill) {
      this.updateUserSkill();
    } else {
      this.assignSkill();
    }
  }

  assignSkill = () => {
    const skillId = this.assignSkillForm.get('skillName').value._id;
    const skillLevelId = this.assignSkillForm.get('skillLevel').value;
    this.skillService.assignSkill(skillId, skillLevelId, this.currentUser.id).subscribe(
      message => {
        this.data.notify.subscribe(m => m);
        this.alertService.success(message);
      }
    );
  }

  updateUserSkill = () => {
    const skillId = this.assignSkillForm.get('skillName').value._id;
    const skillLevelId = this.assignSkillForm.get('skillLevel').value;
    this.skillService.updateUserSkill(this.data.id, skillId, skillLevelId, this.currentUser.id).subscribe(
      message => {
        this.data.notify.subscribe(m => m);
        this.alertService.success(message);
      }
    );
  }

  displayFn(skill: Skill): string {
    return skill? skill.skillName : '';
  }

  loadSkill = (skillId: string, levelId: string) => {
    this.skillService.getSkillProfile(skillId).subscribe(
      item => {
        this.assignSkillForm.get('skillName').setValue(item);
        this.assignSkillForm.get('skillLevel').setValue(levelId);
      }
    )
  }

  searchSkill = (skillName: any) => {
    console.log(skillName);
    this.skills$ = this.skillService.searchSkill(skillName).pipe(
      debounceTime(10000),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      map(item => this.convertJson(item))
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
