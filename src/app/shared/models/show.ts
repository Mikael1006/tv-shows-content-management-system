import { NextSchedule } from './next-schedule';
import { Rating } from './rating';
import { Network } from './network';
import { Externals } from './externals';
import { ShowImage } from './image';
import { Links } from './links';
import { WebChannel } from './web-channel';

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
    schedule: NextSchedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: WebChannel;
    externals: Externals;
    image: ShowImage;
    summary: string;
    updated: number;
    _links: Links;
}
