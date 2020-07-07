import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeLivedRoutingModule } from './time-lived-routing.module';
import { TimelinesComponent } from './timelines/timelines.component';


@NgModule({
  declarations: [TimelinesComponent],
  imports: [
    CommonModule,
    TimeLivedRoutingModule
  ]
})
export class TimeLivedModule { }
