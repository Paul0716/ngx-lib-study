import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NumberLuckyComponent } from './number-lucky/number-lucky.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { NumberLuckyService } from './number-lucky/number-lucky.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [
    HomeComponent,
    NumberLuckyComponent
  ],
  providers: [
    NumberLuckyService
  ],
  exports: [
    HomeComponent,
    NumberLuckyComponent
  ]
})
export class PagesModule { }
