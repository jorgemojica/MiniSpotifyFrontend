import { Playlist } from "./Playlist.model";
import { Subscription } from "./subscription.model";

export class User{

    id?: number;
    username!: string;
    password!: string;
    email!: string;
    role!: string;
    // subscription!: Subscription;
    playlists?: Playlist[];

    constructor(username: string, password: string, email: string, role: string, /*subscription: Subscription,*/ playlists: Playlist[]){
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        // this.subscription = subscription;
        this.playlists = playlists;
    }

}