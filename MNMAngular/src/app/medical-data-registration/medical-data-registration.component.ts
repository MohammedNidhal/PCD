import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medical-data-registration',
  templateUrl: './medical-data-registration.component.html',
  styleUrl: './medical-data-registration.component.css'
})
export class MedicalDataRegistrationComponent {
  id!: number;
  showContent: boolean = true;
  client: Client = new Client();
  medicalData: any = {};
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(
      data => {
        this.client = data;
      },
      error => console.log(error)
    );
  }


  goTologin(): void {
    this.showContent = false;
    this.router.navigate(['/login']);
  }
}
