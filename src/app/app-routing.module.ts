import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyPageComponent} from './survey-page/survey-page.component';
import {ThankYouPageComponent} from './thank-you-page/thank-you-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/page/1', pathMatch: 'full' },
  { path: 'page/1', component: SurveyPageComponent },
  { path: 'page/2', component: ThankYouPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
