import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from 'store';
import {
	AuthService,
	User
} from '../../../auth/shared/services/auth/auth.service';

@Component({
	selector: 'app-root',
	styleUrls: [ 'app.component.scss' ],
	template: `
    <div>
      <h1>{{ user$ | async | json }}</h1>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
	user$: Observable<User>;
	subscription: Subscription;

	constructor(private store: Store, private authService: AuthService) {}

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
}
