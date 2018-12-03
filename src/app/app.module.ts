import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

// var config = {
//   apiKey: "AIzaSyB_PLtl7HPud0uy2Gb_PP-4N3WX2nX-BWo",
//   authDomain: "fitness-app-72064.firebaseapp.com",
//   databaseURL: "https://fitness-app-72064.firebaseio.com",
//   projectId: "fitness-app-72064",
//   storageBucket: "fitness-app-72064.appspot.com",
//   messagingSenderId: "344970180156"
// };