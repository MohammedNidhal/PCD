import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../client';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  step: number = 1;
  medicalData: any = {};
  client :Client=new Client();
  
  constructor(private clientService: ClientService) { }
  ngOnInit() :void {}
  nextStep() {
    if (this.step === 1) {
      // Validation can be added here if necessary
      this.step++;
    } else if (this.step === 2) {
      this.step--;
    }
  }
  saveClient(){
    this.clientService.createClient(this.client).subscribe(data=>{
    console.log(data);
  },
    error=>console.log(error));
  }
    
  }
  submit() {
    console.log(this.client);
    console.log(this.medicalData);
  }
}
