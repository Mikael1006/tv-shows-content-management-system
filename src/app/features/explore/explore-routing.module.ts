import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore.component';
import { SearchComponent } from './components/search/search.component';
import { ShowComponent } from './components/show/show.component';
import { InfoShowComponent } from './components/info-show/info-show.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
      { path: 'search', component: SearchComponent },
      {
        path: 'show/:id',
        component: ShowComponent,
        children: [
          { path: '', redirectTo: 'info' },
          { path: 'info', component: InfoShowComponent },
          { path: 'episodes', component: EpisodesComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
