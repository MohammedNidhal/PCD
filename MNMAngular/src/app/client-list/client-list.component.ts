import { Component,OnInit } from '@angular/core';
import { Client } from '../client';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
  clients!: Client[];
  constructor(){}
  ngOnInit():void {
  this.clients = [{
    "idClient":1,
      "firstName": "John",
      "lastName": "Simba",
      "email": "sim@gmail.com",
      "password":"password",
      "gender":"Male",
      "birthday":new Date(),
      "postalCode":1240,
      "city":"Town",
      "country":"UAE",
      "address":"Dubai,UAE"
    },
    {
      "idClient":2,
        "firstName": "hes",
        "lastName": "ishere",
        "email": "messi@gmail.com",
        "password":"psjssassword",
        "gender":"Female",
        "birthday":new Date(),
        "postalCode":111,
        "city":"Jiji",
        "country":"Feriana",
        "address":",UAE"
      }];
  }  
}
