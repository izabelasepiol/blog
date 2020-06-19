import { Component } from '@angular/core';
import { AddPostService } from './add-post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { GlobalDataService } from '../service/globaldata.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent {

  public post : Post;

  constructor(private addPostService: AddPostService, public globalDataService: GlobalDataService, private router: Router) {
      this.post = new Post();
  }

  addPost() {
  	if(this.post.title && this.post.description){
  		this.addPostService.addPost(this.post).subscribe(res =>{
        this.router.navigate(['/']);
  		});
  	} else {
  		alert('Podaj tytuł i treść posta!');
  	}
  }

  logout(){
    this.globalDataService.loggedUser = null;
    this.router.navigate(['/']);
    }
}

