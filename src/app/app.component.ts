import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@core/models';
import { AuthenticationService } from '@core/services';

@Component({
	selector: 'app-swatang',
	templateUrl: 'app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	currentUser: User;

	constructor(private router: Router, private authenticationService: AuthenticationService) {
		this.authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
	}

	@HostBinding('class') componentCssClass;

	logout() {
		this.authenticationService.logout();
		this.router.navigate([ 'auth/login' ]);
	}

	applyTheme($theme) {
		this.componentCssClass = $theme;
	}

	changeLang($lang) {
		if ($lang === 'fr') {
			localStorage.setItem('locale', 'fr');
		} else if ($lang === 'ja') {
			localStorage.setItem('locale', 'ja');
		} else {
			localStorage.setItem('locale', 'en');
		}
		location.reload(true);
	}
}
