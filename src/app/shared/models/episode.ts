import { ShowImage } from './image';
import { Links } from './links';

export class Episode{
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
    _links: Links;
}
