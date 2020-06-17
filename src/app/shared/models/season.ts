import { Network } from './network';
import { ShowImage } from './image';
import { Links } from './links';
import { WebChannel } from './web-channel';

export class Season{
    id: number;
    url: string;
    number: number;
    name: string;
    episodeOrder: number;
    premiereDate: string;
    endDate: string;
    network: Network;
    webChannel: WebChannel;
    image: ShowImage;
    summary: string;
    _links: Links;
}
