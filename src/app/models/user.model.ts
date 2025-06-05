import { Playlist } from "./Playlist.model";
import { Subscription } from "./subscription.model";

export class User {

    id?: number;
    username?: string;
    password?: string;
    email!: string;
    name!: string;
    image!: string;
    roles?: string[];
    // subscription!: Subscription;
    playlists?: Playlist[];

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    // constructor(username: string, password: string, email: string, name: string, image: string, role: string, /*subscription: Subscription,*/ playlists: Playlist[]){
    //     this.username = username;
    //     this.password = password;
    //     this.email = email;
    //     this.name = name;
    //     this.image = image;
    //     this.role = role;
    //     // this.subscription = subscription;
    //     this.playlists = playlists;
    // }

}