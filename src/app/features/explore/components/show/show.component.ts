import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { ShowsService } from 'src/app/services/shows.service';
import { Show } from 'src/app/shared/models/show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy {

  show: Show;
  private subscriptions: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private showsService: ShowsService,
    private showStoreService: ShowStoreService
    ) {
      this.subscriptions = new Subscription();
  }

  /**
   * get the id of the show in the route
   *
   * @returns {Observable<number>}
   * @memberof ShowComponent
   */
  getShowId(): Observable<number>{
    return this.activeRoute.params.pipe(map(routeParams => {
      return routeParams.id;
    }));
  }

  ngOnInit(): void {
    const subscription = this.getShow().subscribe(show => {
      this.show = show;
      this.showStoreService.dispatchShowChange(this.show);
    });
    this.subscriptions.add(subscription);
  }

  /**
   * get the show
   *
   * @returns {Observable<Show>}
   * @memberof ShowComponent
   */
  getShow(): Observable<Show>{
    return this.getShowId().pipe(
      flatMap(
        id => {
          return this.showsService.getShowById(id);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
