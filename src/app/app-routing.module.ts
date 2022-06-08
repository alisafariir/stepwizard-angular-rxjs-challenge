import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StepOneComponent } from './components/step-one/step-one.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepTwoComponent } from './components/step-two/step-two.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'step-one' },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'step-four', component: StepFourComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }