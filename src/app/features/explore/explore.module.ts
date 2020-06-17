import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { SearchComponent } from './components/search/search.component';
import { ShowComponent } from './components/show/show.component';
import { InfoShowComponent } from './components/info-show/info-show.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { SeasonComponent } from './components/season/season.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { CastComponent } from './components/cast/cast.component';
import { PeopleComponent } from './components/people/people.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SmallInfoShowComponent } from './components/small-info-show/small-info-show.component';


@NgModule({
  declarations: [
    ExploreComponent,
    SearchComponent,
    ShowComponent,
    InfoShowComponent,
    EpisodesComponent,
    SeasonComponent,
    EpisodeComponent,
    CastComponent,
    PeopleComponent,
    ScheduleComponent,
    SmallInfoShowComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule
  ]
})
export class ExploreModule { }
