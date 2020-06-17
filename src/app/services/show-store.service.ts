import { Show } from '../shared/models/show';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ShowStoreService {
    private showStore: BehaviorSubject<Show>;

    constructor() {
        this.showStore = new BehaviorSubject<Show>(null);
    }

    /**
     * get the current show
     *
     * @return {Observable<Show>}
     * @memberof ShowStoreService
     */
    getCurrentShow(): Observable<Show> {
        return this.showStore.asObservable();
    }

    /**
     * Dispatch the new show in the app
     *
     * @param {Show} show
     * @memberof ShowStoreService
     */
    dispatchShowChange(show: Show) {
        this.showStore.next(show);
    }
}
