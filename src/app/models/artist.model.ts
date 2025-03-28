import { Track } from "./track";

export class Artist{

    id?: number;
    name!: string;
    country!: string;
    image!: string;
    tracks?: Track[];

    constructor(name: string, country: string, image: string, tracks: Track[]){
        this.name = name;
        this.country = country;
        this.image = image;
        this.tracks = tracks;
    }

}