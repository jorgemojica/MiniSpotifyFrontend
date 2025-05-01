import { Track } from "./track";

export class Artist{

    id?: number;
    name!: string;
    country!: string;
    image?: string;
    images?: { url: string }[];
    tracks?: Track[];

    constructor(name: string, country: string, image: string, images: { url: string }[], tracks: Track[]){
        this.name = name;
        this.country = country;
        this.image = image;
        this.images = images;
        this.tracks = tracks;
    }

}