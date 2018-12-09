import { Injectable, keyframes } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export interface Meal {
	name: string;
	ingredients: string[];
	timestamp: number;
	$key: string;
	$exists: () => boolean;
}

@Injectable()
export class MealsService {
	meals$: Observable<Meal[]> = (this.db.list(`meals/${this.uid}`) as Observable<
		Meal[]
	>).do((next) => this.store.set('meals', next));

	constructor(
		private store: Store,
		private db: AngularFireDatabase,
		private authService: AuthService
	) {}

	get uid() {
		return this.authService.user.uid;
	}

	getMeal(key: string) {
		if (!key) return Observable.of({});
		// if store is empty this stream will not continue (filter(Boolean) will stop the stream)
		return this.store
			.select<Meal[]>('meals')
			.filter(Boolean)
			.map((meals) => meals.find((meal: Meal) => meal.$key === key));
	}

	addMeal(meal: Meal) {
		return this.db.list(`meals/${this.uid}`).push(meal);
	}

	updateMeal(key: string, meal: Meal) {
		return this.db.object(`meals/${this.uid}/${key}`).update(meal);
	}

	removeMeal(key: string) {
		return this.db.list(`meals/${this.uid}`).remove(key);
	}
}
