import { Artist } from "./artist.model";
import { Genre } from "./Genre.model";
import { Playlist } from "./Playlist.model";

export class Track{

    id?: number;
    title!: string;
    duration!: string;
    artist!: Artist;
    playlists?: Playlist[];
    genres!: Genre[];

    constructor(title: string, duration: string, artist: Artist, playlists: Playlist[], genres: Genre[]){
        this.title = title;
        this.duration = duration;
        this.artist = artist;
        this.playlists = playlists;
        this.genres = genres;
    }

}