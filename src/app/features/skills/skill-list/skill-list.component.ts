import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Skill} from '@core/models/skill';
import { AuthenticationService,SkillService } from '@core/services';
import { MediaChange, MediaObserver } from '@angular/flex-layout';


@Component({
	templateUrl: './skill-list.component.html',
	styleUrls: [ './skill-list.component.scss' ]
})
export class SkillListComponent implements OnInit {

	skills: Skill[] = [];
	columns: number = 3;
	watcher: Subscription;

	constructor(
		private skillService: SkillService,
		
		private router: Router,
		media: MediaObserver
		) {
		
			this.watcher = media.media$.subscribe((change: MediaChange) => {
				if (change) {
					if (change.mqAlias === 'xs') {
						this.columns = 1;
					} else if (change.mqAlias === 'sm') {
						this.columns = 2;
					} else {
						this.columns = 3;
					}
				}
			});
		}
		
	

	ngOnInit() {
		this.loadAllSkills();
	}



	deactivateSkill(id: string) {
	
	}

	private loadAllSkills() {
		this.skillService.getSkills().pipe(first()).subscribe((skills) => {
			this.skills = skills;
		});
	}
}
