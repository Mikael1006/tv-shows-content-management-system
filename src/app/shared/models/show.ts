import { Schedule } from './schedule';
import { Rating } from './rating';
import { Network } from './network';
import { Externals } from './externals';
import { ShowImage } from './image';
import { Links } from './links';

export class Show{
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: Array<string>;
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: any;
    externals: Externals;
    image: ShowImage;
    summary: string;
    updated: number;
    _links: Links;
}
