import { Component, OnInit, OnDestroy } from '@angular/core';
import { Schedule } from 'src/app/shared/models/schedule';
import { Observable, Subscription } from 'rxjs';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  schedules: Array<Schedule>;
  private subscriptions: Subscription;

  constructor(
    private showsService: ShowsService
  ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    const subscription = this.getSchedules().subscribe(schedules => this.schedules = schedules);
    this.subscriptions.add(subscription);
  }

  /**
   * get the schedules of the day
   *
   * @returns {Observable<Array<Schedule>>}
   * @memberof ScheduleComponent
   */
  getSchedules(): Observable<Array<Schedule>>{
    return this.showsService.getTodaySchedules();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
