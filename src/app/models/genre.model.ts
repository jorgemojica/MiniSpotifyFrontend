import { Track } from "./track";

export class Genre{

    id?: number;
    name!: string;
    tracks?: Track[];

    constructor(name: string, tracks: Track[]){
        this.name = name;
        this.tracks = tracks;
    }

}