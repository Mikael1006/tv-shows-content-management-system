import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { SearchComponent } from './components/search/search.component';
import { ShowComponent } from './components/show/show.component';
import { InfoShowComponent } from './components/info-show/info-show.component';
import { EpisodesComponent } from './components/episodes/episodes.component';


@NgModule({
  declarations: [
    ExploreComponent,
    SearchComponent,
    ShowComponent,
    InfoShowComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
