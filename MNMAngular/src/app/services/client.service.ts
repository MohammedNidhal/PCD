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
  createClient(client: Client): Observable<Object> {
    return this.httpClient.post<Client[]>(`${this.baseURL}`,client); 
  }
  getClientById(id:number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`); 
  }
  updateClient(id:number,client: Client): Observable<Object> {
    return this.httpClient.put<Client[]>(`${this.baseURL}`,client)
  }
  deleteClient(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`); 
  }
}