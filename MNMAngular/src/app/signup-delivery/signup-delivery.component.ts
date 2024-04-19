import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-signup-delivery',
  templateUrl: './signup-delivery.component.html',
  styleUrl: './signup-delivery.component.css'
})
export class SignupDeliveryComponent {
  constructor(private http: HttpClient) { }
  firstName!: string;
  lastName!: string;
  cvFile!: File;

  submitForm() {
    // Implement form submission logic here
    console.log('Form submitted!');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('CV File:', this.cvFile);
    // You can send the form data to your backend or perform any other necessary actions
  }

  onFileSelected(event: any) {
    this.cvFile = event.target.files[0];
  }
  submitCv(firstName: string, lastName: string, cvFile: File) {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('cv', cvFile);

    return this.http.post('/api/submit-cv', formData);
  }
}
