import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalDataService {
    public loggedUser: User;
    public posts: any = [];
}