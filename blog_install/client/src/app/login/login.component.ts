import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { GlobalDataService } from '../service/globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  public user: User;
  private users :any = [];

  constructor(private loginService: LoginService, private globalDataService: GlobalDataService, private router: Router) {
    this.user = new User();
  }

  validateLogin() {
    if (this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        this.users = result;
        if(this.users.length === 1){
          this.globalDataService.loggedUser = this.users[0];
          this.router.navigate(['/']);
        } else {
          alert('Wrong user name or password');
        }
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('Please enter user name and password');
    }
  }

}