import { Component } from '@angular/core';
import { AuthService } from 'services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        data => {
          // Handle successful login
        },
        error => {
          // Handle login error
        }
      );
  }

}
