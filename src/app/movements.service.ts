import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movements } from './movements';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  [x: string]: any;

  private baseURL = "http://localhost:8090/api/v1/movements";

  constructor(private httpClient: HttpClient) { }

  getMovementsList(): Observable<Movements[]>{
    return this.httpClient.get<Movements[]>(this.baseURL);
  }

  createMovement(movement: Movements): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, movement);
  }

}
