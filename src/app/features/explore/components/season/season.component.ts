import { Component, OnInit, Input } from '@angular/core';
import { Season } from 'src/app/shared/models/season';
import { Episode } from 'src/app/shared/models/episode';
import { ShowsService } from 'src/app/services/shows.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  @Input()
  season: Season;

  episodes: Array<Episode>;

  constructor(
    private showsService: ShowsService
  ) { }

  ngOnInit(): void {
    this.getEpisodes().subscribe(episodes => this.episodes = episodes);
  }

  getEpisodes(): Observable<Array<Episode>>{
    return this.showsService.getEpisodesBySeasonId(this.season.id);
  }

}
