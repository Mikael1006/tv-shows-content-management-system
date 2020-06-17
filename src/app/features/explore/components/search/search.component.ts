import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShowsService } from 'src/app/services/shows.service';
import { ScoredShow } from 'src/app/shared/models/scored-show';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  query: string;
  shows: Array<ScoredShow>;
  private subscriptions: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private showsService: ShowsService
    ) {
      this.subscriptions = new Subscription();
  }

  /**
   * get the q query parameter of the route
   *
   * @returns {Observable<string>}
   * @memberof SearchComponent
   */
  getSearchQuery(): Observable<string>{
    return this.activeRoute.queryParams.pipe(map(routeParams => {
      return routeParams.q;
    }));
  }

  ngOnInit(): void {
    const subscription = this.getSearchQuery().subscribe(
      q => {
        this.query = q;
        this.showsService.getShowsByName(this.query).subscribe(shows => this.shows = shows);
      }
    );
    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
