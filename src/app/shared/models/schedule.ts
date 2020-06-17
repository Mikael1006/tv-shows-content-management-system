import { ShowImage } from './image';
import { Show } from './show';
import { Links } from './links';

export class Schedule{
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: ShowImage;
    summary: string;
    show: Show;
    _links: Links;
}