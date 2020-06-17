import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/app/shared/models/show';

@Component({
  selector: 'app-small-info-show',
  templateUrl: './small-info-show.component.html',
  styleUrls: ['./small-info-show.component.scss']
})
export class SmallInfoShowComponent {

  @Input()
  show: Show;

  constructor() { }
}
