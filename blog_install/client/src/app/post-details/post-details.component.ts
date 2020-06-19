import { Component } from "@angular/core";
import { ShowPostService } from '../service/show-post.service';
import { GlobalDataService } from '../service/globaldata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

    constructor(private showPostService: ShowPostService, public globalDataService: GlobalDataService, private route: ActivatedRoute, private router: Router) { 
        this.showPostService.getPost(this.route.snapshot.params.id).subscribe(res => {
            this.post = res;
        })
    }

    public post: any;


    removePost(postId) {
        if (confirm("Czy na pewno usunąć?")) {
            this.showPostService.removePost(postId).subscribe(res => {
                this.router.navigate(['/']);
            })
        }
    }
}



