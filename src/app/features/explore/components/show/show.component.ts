import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ShowsService } from 'src/app/services/shows.service';
import { map } from 'rxjs/operators';
import { Show } from 'src/app/shared/models/show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy {

  show: Observable<Show>;
  private subscriptions: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private showsService: ShowsService
    ) {
      this.subscriptions = new Subscription();
  }

  /**
   * get the id of the show in the route
   *
   * @returns {Observable<string>}
   * @memberof ShowComponent
   */
  getShowId(): Observable<number>{
    return this.activeRoute.params.pipe(map(routeParams => {
      return routeParams.id;
    }));
  }

  ngOnInit(): void {
    const subscription = this.getShowId().subscribe(
      id => {
        this.show = this.showsService.getShowById(id);
      }
    );
    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
