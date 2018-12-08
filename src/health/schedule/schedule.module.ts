import { NgModule } from '@angular/core';

import { ScheduleComponent } from './containers/schedule/schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const ROUTES: Routes = [ { path: '', component: ScheduleComponent } ];

@NgModule({
	imports: [ CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES) ],
	declarations: [ ScheduleComponent ]
})
export class ScheduleModule {}
