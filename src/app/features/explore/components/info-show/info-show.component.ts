import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { Show } from 'src/app/shared/models/show';

@Component({
  selector: 'app-info-show',
  templateUrl: './info-show.component.html',
  styleUrls: ['./info-show.component.scss']
})
export class InfoShowComponent implements OnInit, OnDestroy {

  show: Show;
  private subscriptions: Subscription;

  constructor(
    private showStoreService: ShowStoreService
    ) {
      this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    const subscription = this.showStoreService.getCurrentShow().subscribe(show => {
      console.log(show)
      this.show = show;
    });
    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
