import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { ShowsService } from 'src/app/services/shows.service';
import { Season } from 'src/app/shared/models/season';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit, OnDestroy {

  seasons: Array<Season>;
  private subscriptions: Subscription;

  constructor(
    private showStoreService: ShowStoreService,
    private showsService: ShowsService
    ) {
      this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    const subscription = this.getSeasons().subscribe(seasons => {
      this.seasons = seasons;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * Get the list of season from the show id in store
   *
   * @returns {Observable<Array<Season>>}
   * @memberof EpisodesComponent
   */
  getSeasons(): Observable<Array<Season>>{
    return this.showStoreService.getCurrentShow().pipe(
      flatMap(
        show => {
          return this.showsService.getSeasonsByShowId(show.id);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
