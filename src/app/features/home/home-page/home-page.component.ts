import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@core/models';
import { AuthenticationService, UserService } from '@core/services';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
	templateUrl: './home-page.component.html',
	styleUrls: [ './home-page.component.scss' ]
})
export class HomePageComponent implements OnInit, OnDestroy {
	currentUser: User;
	currentUserSubscription: Subscription;
	users: User[] = [];
	watcher: Subscription;
	columns: number = 4;

	constructor(
		private authenticationService: AuthenticationService,
		private userService: UserService,
		private router: Router,
		media: MediaObserver
	) {
		this.currentUserSubscription = this.authenticationService.currentUser.subscribe((user) => {
			this.currentUser = user;
		});
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
		this.loadAllUsers();
	}

	ngOnDestroy() {
		// unsubscribe to ensure no memory leaks
		this.currentUserSubscription.unsubscribe();
	}

	deleteUser(id: string) {
		this.userService.delete(id).pipe(first()).subscribe(() => {
			this.loadAllUsers();
		});
	}

	deactivateUser(id: string) {
		this.userService.deactivate(id).pipe(first()).subscribe(() => {
			if (this.currentUser.id === id) {
				this.authenticationService.invalidate();
				this.router.navigate([ '/login' ]);
			} else {
				this.loadAllUsers();
			}
		});
	}

	private loadAllUsers() {
		this.userService.getAll().pipe(first()).subscribe((users) => {
			this.users = users;
		});
	}
}
