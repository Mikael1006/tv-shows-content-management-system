import { Component, OnInit, Input } from '@angular/core';
import { Season } from 'src/app/shared/models/season';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  @Input()
  season: Season;

  constructor() { }

  ngOnInit(): void {
  }

}
