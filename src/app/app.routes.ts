import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NumberLuckyComponent } from './pages/number-lucky/number-lucky.component';
import { ReduxComponent } from './pages/redux/redux.component';

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
    path: 'redux',
    component: ReduxComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
