import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoredShow } from '../shared/models/scored-show';
import { Observable } from 'rxjs';
import { Show } from '../shared/models/show';
import { Episode } from '../shared/models/episode';

@Injectable()
export class ShowsService {
    private apiUrl = 'http://api.tvmaze.com';
    private searchUrl = `${this.apiUrl}/search/shows`;
    private showsUrl = `${this.apiUrl}/shows`;

    constructor(
        private http: HttpClient
    ){}

    /**
     * get the list of shows matching the query
     *
     * @param {string} query
     * @returns {Observable<Array<ScoredShow>>}
     * @memberof ShowsService
     */
    getShowsByName(query: string): Observable<Array<ScoredShow>>{
        return this.http.get<Array<ScoredShow>>(this.searchUrl, { params: { q: query }});
    }

    /**
     * get the show by id
     *
     * @param {number} id
     * @returns {Observable<Show>}
     * @memberof ShowsService
     */
    getShowById(id: number): Observable<Show>{
        return this.http.get<Show>(`${this.showsUrl}/${id}`);
    }

    /**
     * get episodes by show id
     *
     * @param {number} id
     * @returns {Observable<Show>}
     * @memberof ShowsService
     */
    getEpisodesByShowId(id: number): Observable<Array<Episode>>{
        return this.http.get<Array<Episode>>(`${this.showsUrl}/${id}/episodes`);
    }
}
