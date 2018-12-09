import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
	selector: 'meal',
	template: `
		<div class="meal">
			<div class="meal__title">
				<h1>
					<img src="/img/food.svg">
					<span>Create meal</span>
				</h1>
			</div>
			<div>
				<meal-form
					(create)="addMeal($event)">
				</meal-form>
			</div>
		</div>
  `,
	styleUrls: [ 'meal.component.scss' ]
})
export class MealComponent {
	constructor() {}

	addMeal(event: Meal) {
		console.log('meal', event);
	}
}
