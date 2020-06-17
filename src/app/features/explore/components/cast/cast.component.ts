import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cast } from 'src/app/shared/models/cast';
import { Subscription, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit, OnDestroy {

  cast: Array<Cast>;
  private subscriptions: Subscription;

  constructor(
    private showStoreService: ShowStoreService,
    private showsService: ShowsService
    ) {
      this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    const subscription = this.getCast().subscribe(cast => {
      this.cast = cast;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * Get the cast from the show id in store
   *
   * @returns {Observable<Array<Cast>>}
   * @memberof CastComponent
   */
  getCast(): Observable<Array<Cast>>{
    return this.showStoreService.getCurrentShow().pipe(
      flatMap(
        show => {
          return this.showsService.getCastByShowId(show.id);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
