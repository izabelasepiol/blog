import { Component } from '@angular/core';
import { GlobalDataService } from '../service/globaldata.service';
import { Router } from '@angular/router';
import { ShowPostService } from '../service/show-post.service';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
    
    titleSearch: String;

    constructor(public globalDataService: GlobalDataService, public showPostService: ShowPostService, private router: Router) {
    }

    logout() {
        this.globalDataService.loggedUser = null;
        this.router.navigate(['/']);
    }

    searchPosts() {
        if (!this.titleSearch) {
            this.home();
        } else {
            this.showPostService.searchPosts(this.titleSearch).subscribe(res => {
                this.globalDataService.posts = res;
            })
        }
    }

    home() {
        this.showPostService.getAllPosts().subscribe(res => {
            this.titleSearch = null;
            this.globalDataService.posts = res;
        })
    }
}