import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../../services/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
})
export class TimelinesComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit(): void {
  }

  onChange(value: string): void {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
