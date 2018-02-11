import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { NumberLuckyComponent } from './pages/number-lucky/number-lucky.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'numberLucky',
    component: NumberLuckyComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
