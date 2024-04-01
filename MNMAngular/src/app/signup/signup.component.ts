import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  step: number = 1;
  userData: any = {};
  medicalData: any = {};

  constructor(private signupService: SignupService) { }

  nextStep() {
    this.step++;
  }

  submit() {
    const userDataAndMedicalData = { ...this.userData, ...this.medicalData };
    this.signupService.signup(userDataAndMedicalData)
      .subscribe(
        data => {
          // Handle successful signup
        },
        error => {
          // Handle signup error
        }
      );
  }
}
