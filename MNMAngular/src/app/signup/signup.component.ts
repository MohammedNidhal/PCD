import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../client';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  step: number = 1;
  medicalData: any = {};
  client :Client=new Client();




  constructor(private clientService: ClientService,  private router : Router){ }
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
    this.goToClientList();
  },
    error=>console.log(error));
  }
    goToClientList(){
      this.router.navigate(['clients']);
    }

  submit() {
    console.log(this.client);
    console.log(this.medicalData);
  }
}
