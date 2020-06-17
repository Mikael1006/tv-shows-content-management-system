import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ShowsService } from 'src/app/services/shows.service';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  person: Person;
  private subscriptions: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private showsService: ShowsService
    ) {
      this.subscriptions = new Subscription();
  }

  /**
   * get the id of the person in the route
   *
   * @returns {Observable<number>}
   * @memberof PeopleComponent
   */
  getPersonId(): Observable<number>{
    return this.activeRoute.params.pipe(map(routeParams => {
      return routeParams.id;
    }));
  }

  ngOnInit(): void {
    const subscription = this.getPerson().subscribe(episode => {
      this.person = episode;
    });
    this.subscriptions.add(subscription);
  }

  /**
   * get the person from id url
   *
   * @returns {Observable<People>}
   * @memberof PeopleComponent
   */
  getPerson(): Observable<Person>{
    return this.getPersonId().pipe(
      flatMap(id => this.showsService.getPersonById(id))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
