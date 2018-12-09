import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'meal',
	template: `
    <div class="meal">Meal</div>
  `,
	styleUrls: [ 'meal.component.scss' ]
})
export class MealComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
