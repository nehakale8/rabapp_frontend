import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Population } from './population';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  [x: string]: any;

  private baseURL = "http://localhost:8090/api/v1/population";

  constructor(private httpClient: HttpClient) { }

  getPopulationsList(): Observable<Population[]>{
    return this.httpClient.get<Population[]>(this.baseURL);
  }

  createPopulation(population: Population): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, population);
  }

}
