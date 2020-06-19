import { Component, OnInit } from '@angular/core';
import { ShowPostService } from '../service/show-post.service';
import { GlobalDataService } from '../service/globaldata.service';

@Component({
    selector: 'app-show-post',
    templateUrl: './show-post.component.html',
    styleUrls: ['./show-post.component.css'],
    providers: [ShowPostService]
})
export class ShowPostComponent implements OnInit {

    constructor(private showPostService: ShowPostService, public globalDataService: GlobalDataService) { }

    ngOnInit() {
        this.getAllPosts();
    }

    getAllPosts() {
        this.showPostService.getAllPosts().subscribe(res => {
            this.globalDataService.posts = res;
        })
    }

    removePost(postId) {
        if (confirm("Czy na pewno usunąć?")) {
            this.showPostService.removePost(postId).subscribe(res => {
                this.getAllPosts();
            })
        }
    }

    searchPosts(title) {
        this.showPostService.searchPosts(title).subscribe(res => {
            this.globalDataService.posts = res;
        })
    }
}