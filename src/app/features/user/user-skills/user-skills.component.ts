import { Component, OnDestroy, OnInit, ViewChild, Inject } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import {MatDialog} from '@angular/material/dialog';
import { Dialog } from '../dialog/dialog.component';
import { Router } from '@angular/router'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '@core/models'
import {
  AlertService,
  AuthenticationService,
  UserService,
} from '@core/services'
import { Observable, Subscription } from 'rxjs'
import { SkillService } from '@app/features/skills/services/skill.service';

@Component({
  selector: 'user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss'],
})
export class UserSkillsComponent implements OnInit, OnDestroy {
  currentUser: User
  currentUserSubscription: Subscription
  loading = false
  submitted = false
  deleted = false
  passwordForm: FormGroup
  name: string
  animal: string
  userSkills: PeriodicElement[] = []
  
  displayedColumns: string[] = ['skillName', 'skillLevel', 'actions'];
  dataSource: any; 

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private skillService: SkillService,
    private router: Router,
    public dialog: MatDialog
  ) { }
  
  ngOnInit() {
    this.currentUserSubscription = this.authenticateService.currentUser.subscribe(
      user => {
        this.currentUser = user;
        this.getUserSkills();
      }
    )
  }

  ngOnDestroy() {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe()
    }
  }

  get formControls() {
    return this.passwordForm.controls
  }

  getUserSkills = ()  => {
    this.userService.getUserSkills(this.currentUser.id).subscribe(userSkills => {
      this.userSkills =  userSkills;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.userSkills);
      this.dataSource.paginator = this.paginator;
    })
  }

  updateSkill = (userSkill) => {
    this.skillService.getSkillProfile(userSkill.skillNameId).subscribe(item => {
      this.openDialog(item, userSkill);
    })
  }

  deleteSkill = (userSkill) => {
    this.skillService.removeUserSkill(userSkill.skillNameId, this.currentUser.id).subscribe(
      m => {
        this.alertService.success(m);
        this.getUserSkills();
      }
    )
  }

  updateEvent$ = Observable.create(subscriber => {
    this.getUserSkills();
    subscriber.next('');
    subscriber.complete();
  });

  openDialog(skill?, userSkill?): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '500px',
      data: skill ? {
        skill,
        selectedLevel: userSkill? userSkill.skillLevelId: '',
        id: userSkill ? userSkill._id : '',
        type: 'update',
        notify: this.updateEvent$ 
      } : {type:  'add', notify: this.updateEvent$}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
}

export interface PeriodicElement {
  skillName: string;
  skillNameId: string;
  skillLevel: number;
  skillLevelId: string;
  actions: {update: boolean, delete: boolean};
}


