import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';


const routes: Routes = [
  {
    path: '',
    component: TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeLivedRoutingModule { }
