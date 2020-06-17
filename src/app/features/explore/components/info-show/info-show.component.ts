import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowStoreService } from 'src/app/services/show-store.service';
import { Show } from 'src/app/shared/models/show';

@Component({
  selector: 'app-info-show',
  templateUrl: './info-show.component.html',
  styleUrls: ['./info-show.component.scss']
})
export class InfoShowComponent implements OnInit {

  show: Observable<Show>;

  constructor(
    private showStoreService: ShowStoreService
    ) {}

  ngOnInit(): void {
    this.show = this.showStoreService.getCurrentShow();
  }
}
