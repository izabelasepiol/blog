import {Component} from '@angular/core';
import { GlobalDataService } from '../service/globaldata.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(public globalDataService: GlobalDataService, private router: Router){ 
    }
}