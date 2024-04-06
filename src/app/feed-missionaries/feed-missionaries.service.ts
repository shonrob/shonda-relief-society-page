import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from './feed-missionaries.model';

@Injectable({
  providedIn: 'root',
})
export class FeedMissionariesService {
  apiUrl = 'http://localhost:3000/server/feed-missionaries';

  constructor(private httpClient: HttpClient) {}

  getMissionaryMeals() {
    return this.httpClient.get<Meal[]>(`${this.apiUrl}`);
  }
}
