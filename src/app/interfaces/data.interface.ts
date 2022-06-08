import { User } from "./user.interface";

export interface DataSource {
    image?: string;
    amount?: string;
    date?: string;
    status?: any;
    fund?: string;
    user?:User
}
