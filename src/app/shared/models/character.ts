import { ShowImage } from './image';
import { Links } from './links';

export class Character{
    id: number;
    url: string;
    name: string;
    image: ShowImage;
    _links: Links;
}
