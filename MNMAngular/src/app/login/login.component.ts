import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.getClientDetails(this.email, this.password)
      .subscribe(
        data => {
          this.router.navigate(['/Dashboard']);
        },
        error => {
          // Handle login error
        }
      );
  }
}
