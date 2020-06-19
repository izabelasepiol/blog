import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {}

    validateLogin(user: User){
        const url ='http://localhost:3000/user'
        return this.http.get(url, {params: {username: user.username, password: user.password}});
    }
}