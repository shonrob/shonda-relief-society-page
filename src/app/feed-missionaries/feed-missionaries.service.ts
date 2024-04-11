import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Meal } from './feed-missionaries.model';

@Injectable({
  providedIn: 'root',
})
export class FeedMissionariesService {
  private meals: Meal[] = [];

  // the connection to the backend server
  private apiUrl = 'http://localhost:3000/server/feed-missionaries';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  // EVENTS
  feedMissionaryChangedEvent = new EventEmitter<Meal[]>();

  // METHODS
  getMissionaryMeals() {
    this.httpClient.get<any>(`${this.apiUrl}`).subscribe({
      next: (mealList: any) => {
        this.meals = mealList.schedule;
        this.sortAndSend(this.meals);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  sortAndSend(mealList = this.meals) {
    mealList.sort((a, b) => a.name.localeCompare(b.name));
    const mealListClone = mealList.slice();
    this.feedMissionaryChangedEvent.next(mealListClone);
  }

  getAMeal(id: string): Meal {
    return this.meals.find((theMeal) => theMeal._id === id);
  }

  addMeal(newMeal: Meal) {
    if (!newMeal) {
      return;
    }
    this.httpClient
      .post<any>(this.apiUrl, newMeal, {
        headers: this.headers,
      })
      .subscribe((responseData) => {
        this.getMissionaryMeals();
      });
  }

  updateMeal(originalMeal: Meal, newMeal: Meal) {
    if (!originalMeal || !newMeal) {
      return;
    }

    const pos = this.meals.findIndex((d) => d._id === originalMeal._id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Meal to the id of the old Meal
    newMeal._id = originalMeal._id;

    // update database
    this.httpClient
      .put(`${this.apiUrl}/update/${originalMeal._id}`, newMeal, {
        headers: this.headers,
      })
      .subscribe((response: Response) => {
        this.getMissionaryMeals();
      });
  }

  deleteMeal(meal: Meal) {
    if (!meal) {
      return;
    }

    const pos = this.meals.findIndex((d) => d._id === meal._id);

    if (pos < 0) {
      return;
    }

    // delete from database
    this.httpClient
      .delete(`${this.apiUrl}/` + meal._id)
      .subscribe((response: Response) => {
        this.meals.splice(pos, 1);
        this.sortAndSend();
      });
  }
}
