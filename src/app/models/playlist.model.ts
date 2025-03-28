import { Track } from "./track";
import { User } from "./user.model";

export class Playlist{

    id?: number;
    name!: string;
    user?: User
    tracks?: Track[];

    constructor(name: string, user: User, tracks: Track[]){
        this.name = name;
        this.user = user;
        this.tracks = tracks;
    }
    
}