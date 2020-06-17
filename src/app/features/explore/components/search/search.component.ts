import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  query: string;
  private subscriptions: Subscription;

  constructor(
    private activeRoute: ActivatedRoute
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
    this.subscriptions.add(this.getSearchQuery().subscribe(q => this.query = q));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
