import { Component } from '@angular/core';
import { FeedMissionariesService } from './feed-missionaries.service';
import { Meal } from './feed-missionaries.model';
import { Subscription } from 'rxjs';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feed-missionaries',
  templateUrl: './feed-missionaries.component.html',
  styleUrl: './feed-missionaries.component.css',
})
export class FeedMissionariesComponent {
  mealsList: Meal[] = [];
  showForm: boolean = false;

  subscription: Subscription;

  constructor(
    private feedMissionariesService: FeedMissionariesService // private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.feedMissionariesService.getMissionaryMeals();
    this.subscription =
      this.feedMissionariesService.feedMissionaryChangedEvent.subscribe(
        (meals: Meal[]) => {
          this.mealsList = meals;
        }
      );
  }

  // dateFormat(date: Date): string {
  //   const oldDate = new Date(date);
  //   return this.datePipe.transform(oldDate, 'yyyy-MM-dd');
  // }

  openForm() {
    this.showForm = !this.showForm;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
