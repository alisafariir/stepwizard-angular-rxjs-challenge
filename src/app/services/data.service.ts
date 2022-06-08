import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataSource } from '../interfaces/data.interface';
import { Information } from '../interfaces/information.interface';
import { Status } from '../interfaces/status.interface';
import { User } from '../interfaces/user.interface';



@Injectable({
    providedIn: 'root'
})
export class DataService {

    image$: BehaviorSubject<string> = new BehaviorSubject('');
    information$: BehaviorSubject<Information> = new BehaviorSubject({});
    user$: BehaviorSubject<User> = new BehaviorSubject({});

    statusItems: Status[] = [
        { text: 'Late Payment', id: 0 },
        { text: 'On Hold', id: 1 },
        { text: 'Suspended', id: 2 },
        { text: 'erminated', id: 3 },
    ]
    userItems: User[] = [
        {
            avatar: 'https://i.pravatar.cc/150?img=54',
            fullName: 'Jean Reno',
            email: 'jean.reno@example.com'
        },
        {
            avatar: 'https://i.pravatar.cc/150?img=63',
            fullName: 'Russell Crowe',
            email: 'russell.crowe@example.com'
        },
        {
            avatar: 'https://i.pravatar.cc/150?img=12',
            fullName: 'Leo Dicaprio',
            email: 'leo.dicaprio@example.com'
        }
    ]

}