import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL = "http://localhost:8080/api/v1/client";

  constructor(private httpClient: HttpClient) {}

  getClientsList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}`); 
  }
}