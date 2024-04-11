import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { color } from 'highcharts';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'] 
})
export class SettingsComponent implements OnInit {
  id!: number;
  client: Client = new Client();
  showContent: number | null = null;
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

  onSubmit() {
    this.clientService.updateClient(this.id, this.client).subscribe(
      data => {
        this.goToClientList();
      },
      error => console.log(error)
    );
  }

  goToClientList() {
    this.router.navigate(['/clients']);
  }
  
}