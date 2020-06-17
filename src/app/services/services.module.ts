import { NgModule, ErrorHandler } from '@angular/core';
import { MetadataService } from './metadata.service';
import { ShowsService } from './shows.service';

@NgModule({
    providers: [
        ShowsService,
    ]
})
export class ServicesModule { }
