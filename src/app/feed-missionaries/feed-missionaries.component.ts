import { Component } from '@angular/core';
import { FeedMissionariesService } from './feed-missionaries.service';
import { Meal } from './feed-missionaries.model';

@Component({
  selector: 'app-feed-missionaries',
  templateUrl: './feed-missionaries.component.html',
  styleUrl: './feed-missionaries.component.css',
})
export class FeedMissionariesComponent {
  mealsList: Meal[] = [];

  constructor(private feedMissionariesService: FeedMissionariesService) {}

  ngOnInit() {
    this.feedMissionariesService
      .getMissionaryMeals()
      .subscribe((mealListReturn) => {
        this.mealsList = mealListReturn.schedule;
        console.log(mealListReturn);
      });
  }
}
