import { User } from "./user.model";

export class Subscription{

    id?: number;
    type!: string;
    user?: User

    constructor(type: string, user: User){
        this.type = type;
        this.user = user;
    }

}