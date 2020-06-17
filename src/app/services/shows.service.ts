import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoredShow } from '../shared/models/scored-show';
import { Observable } from 'rxjs';

@Injectable()
export class ShowsService {
    private searchUrl = 'http://api.tvmaze.com/search/shows';

    constructor(
        private http: HttpClient
    ){}

    getShowsByName(query: string): Observable<Array<ScoredShow>>{
        return this.http.get<Array<ScoredShow>>(this.searchUrl, { params: { q: query }});
    }
}
