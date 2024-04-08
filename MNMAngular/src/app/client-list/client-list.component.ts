import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'] // Fixed typo here
})
export class ClientListComponent implements OnInit {
  clients: Client[] = []; 
  constructor(private clientService: ClientService, private router: Router) {}
  
  ngOnInit(): void {
    this.getClients();
  }

  private getClients() {
    this.clientService.getClientsList().subscribe(data => {
      this.clients = data;
    });
  }

  updateClient(id: number) {
    this.router.navigate(['/Settings', id]);
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(data => {
      console.log(data);
      this.getClients(); 
    });
  }
}
