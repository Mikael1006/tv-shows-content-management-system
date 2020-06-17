import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { ShowsService } from 'src/app/services/shows.service';
import { Episode } from 'src/app/shared/models/episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit, OnDestroy {

  episodes: Array<Episode>;
  private subscriptions: Subscription;

  constructor(
    private showStoreService: ShowStoreService,
    private showsService: ShowsService
    ) {
      this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    const subscription = this.getEpisodes().subscribe(episodes => {
      this.episodes = episodes;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * Get the list of episode from the show id in store
   *
   * @returns
   * @memberof EpisodesComponent
   */
  getEpisodes(){
    return this.showStoreService.getCurrentShow().pipe(
      flatMap(
        show => {
          return this.showsService.getEpisodesByShowId(show.id);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
