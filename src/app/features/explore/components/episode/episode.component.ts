import { Component, OnInit, OnDestroy } from '@angular/core';
import { Episode } from 'src/app/shared/models/episode';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnDestroy {

  episode: Episode;
  private subscriptions: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private showsService: ShowsService,
    private showStoreService: ShowStoreService
    ) {
      this.subscriptions = new Subscription();
  }

  /**
   * get the id of the episode in the route
   *
   * @returns {Observable<number>}
   * @memberof EpisodeComponent
   */
  getEpisodeId(): Observable<number>{
    return this.activeRoute.params.pipe(map(routeParams => {
      return routeParams.id;
    }));
  }

  ngOnInit(): void {
    const subscription = this.getEpisode().subscribe(episode => {
      this.episode = episode;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * get the episode from id url
   *
   * @returns {Observable<Episode>}
   * @memberof EpisodeComponent
   */
  getEpisode(): Observable<Episode>{
    return this.getEpisodeId().pipe(
      flatMap(id => this.showsService.getEpisodeById(id))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
