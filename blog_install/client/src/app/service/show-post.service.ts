import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShowPostService {

    constructor(private http: HttpClient){

    }

    getAllPosts(){
        return this.http.get('http://localhost:3000/post');
    }

    getPost(postId){
        return this.http.get('http://localhost:3000/post/'+postId);
    }

    removePost(postId){
        return this.http.delete('http://localhost:3000/post/'+postId);
    }

    searchPosts(title){
        return this.http.get('http://localhost:3000/post?title_like='+title);
    }
}