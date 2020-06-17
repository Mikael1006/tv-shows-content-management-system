import { Country } from './country';
import { ShowImage } from './image';
import { Links } from './links';

export class Person{
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: string;
    deathday: string;
    gender: string;
    image: ShowImage;
    _links: Links;
}
