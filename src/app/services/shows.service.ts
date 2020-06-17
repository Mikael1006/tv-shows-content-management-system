import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoredShow } from '../shared/models/scored-show';
import { Observable } from 'rxjs';
import { Show } from '../shared/models/show';
import { Episode } from '../shared/models/episode';
import { Season } from '../shared/models/season';
import { Cast } from '../shared/models/cast';
import { Person } from '../shared/models/person';
import { Schedule } from '../shared/models/schedule';

@Injectable()
export class ShowsService {
    private apiUrl = 'http://api.tvmaze.com';
    private searchUrl = `${this.apiUrl}/search/shows`;
    private showsUrl = `${this.apiUrl}/shows`;
    private episodesUrl = `${this.apiUrl}/episodes`;
    private peopleUrl = `${this.apiUrl}/people`;
    private seasonsUrl = `${this.apiUrl}/seasons`;
    private scheduleUrl = `${this.apiUrl}/schedule`;

    constructor(
        private http: HttpClient
    ){}

    /**
     * get the schedule of the day
     *
     * @returns {Observable<Array<Schedule>>}
     * @memberof ShowsService
     */
    getTodaySchedules(): Observable<Array<Schedule>>{
        return this.http.get<Array<Schedule>>(`${this.scheduleUrl}`);
    }

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
     * get episode by id
     *
     * @param {number} id
     * @returns {Observable<Episode>}
     * @memberof ShowsService
     */
    getEpisodeById(id: number): Observable<Episode>{
        return this.http.get<Episode>(`${this.episodesUrl}/${id}`);
    }

    /**
     * get people by id
     *
     * @param {number} id
     * @returns {Observable<Person>}
     * @memberof ShowsService
     */
    getPersonById(id: number): Observable<Person>{
        return this.http.get<Person>(`${this.peopleUrl}/${id}`);
    }

    /**
     * get episodes by show id
     *
     * @param {number} id
     * @returns {Observable<Array<Episode>>}
     * @memberof ShowsService
     */
    getEpisodesByShowId(id: number): Observable<Array<Episode>>{
        return this.http.get<Array<Episode>>(`${this.showsUrl}/${id}/episodes`);
    }

    /**
     * get season by show id
     *
     * @param {number} id
     * @returns {Observable<Array<Episode>>}
     * @memberof ShowsService
     */
    getSeasonsByShowId(id: number): Observable<Array<Season>>{
        return this.http.get<Array<Season>>(`${this.showsUrl}/${id}/seasons`);
    }

    /**
     * get cast by show id
     *
     * @param {number} id
     * @returns {Observable<Array<Cast>>}
     * @memberof ShowsService
     */
    getCastByShowId(id: number): Observable<Array<Cast>>{
        return this.http.get<Array<Cast>>(`${this.showsUrl}/${id}/cast`);
    }

    /**
     * get episodes by season id
     *
     * @param {number} id
     * @returns {Observable<Array<Episode>>}
     * @memberof ShowsService
     */
    getEpisodesBySeasonId(id: number): Observable<Array<Episode>>{
        return this.http.get<Array<Episode>>(`${this.seasonsUrl}/${id}/episodes`);
    }
}
