import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { SearchComponent } from './components/search/search.component';
import { ShowComponent } from './components/show/show.component';


@NgModule({
  declarations: [ExploreComponent, SearchComponent, ShowComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
