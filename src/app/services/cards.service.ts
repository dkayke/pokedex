import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Cards, { Card } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  all(page = 1, pageSize = 20): Observable<Cards> {
    return this.http.get<Cards>(`${environment.baseUrl}${'cards'}?page=${page}&pageSize=${pageSize}`);
  }

  find(id: string): Observable<Card> {
    return this.http.get<Card>(`${environment.baseUrl}${'cards'}/${id}`);
  }
}
