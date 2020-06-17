import { NgModule } from '@angular/core';
import { ShowsService } from './shows.service';
import { ShowStoreService } from './show-store.service';

@NgModule({
    providers: [
        ShowsService,
        ShowStoreService
    ]
})
export class ServicesModule { }
