import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from '../feed-missionaries.model';
import { FeedMissionariesService } from '../feed-missionaries.service';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrl: './meal-item.component.css',
})
export class MealItemComponent {
  @Input() meal: Meal;
  @Input() id: string;

  constructor(private feedMissionariesService: FeedMissionariesService) {}

  deleteMe() {
    this.feedMissionariesService.deleteMeal(this.meal);
  }
}
