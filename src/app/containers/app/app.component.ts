import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from 'store';
import {
	AuthService,
	User
} from '../../../auth/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	styleUrls: [ 'app.component.scss' ],
	template: `
    <div>
			<app-header
				[user]="user$ | async"
				(logout)="onLogout()"
			>
			</app-header>
			<app-nav
				*ngIf="(user$ | async)?.authenticated">
			</app-nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
	user$: Observable<User>;
	subscription: Subscription;

	constructor(
		private store: Store,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.subscription = this.authService.auth$.subscribe();
		this.user$ = this.store.select<User>('user');
	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.subscription.unsubscribe();
	}

	async onLogout() {
		await this.authService.logoutUser();
		this.router.navigate([ '/auth/login' ]);
	}
}
