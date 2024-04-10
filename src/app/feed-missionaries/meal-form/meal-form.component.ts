import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Meal } from '../feed-missionaries.model';
import { FeedMissionariesService } from '../feed-missionaries.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.css',
})
export class MealFormComponent {
  // VARIABLES
  // Unedit meal
  originalMeal: Meal;
  //editedVersion of the meal from the form
  meal: Meal;
  //indicates whether an existing meal has been edited, or a new meal is being created.
  editMode: boolean = false;

  constructor(
    private mealService: FeedMissionariesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // METHODS
  // determining if we are editing an existing meal or creating a new meal
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (!id) {
        this.editMode = false;
        return;
      }
      this.originalMeal = this.mealService.getAMeal(id);
      if (!this.originalMeal) {
        return;
      }
      this.editMode = true;
      this.meal = JSON.parse(JSON.stringify(this.originalMeal));
    });
  }

  // called when the user selects the save button and submits the form. It will either add the new meal to the meal list or update the existing doucment in the meal List.
  onSubmit(form: NgForm) {
    let value = form.value; //retrieving the value the user inputs in the forms field
    let newMeal = new Meal(
      null,
      value.name,
      value.date,
      '5:00pm',
      value.phoneNumber,
      value.address
    );
    if (this.editMode) {
      this.mealService.updateMeal(this.originalMeal, newMeal);
    } else {
      this.mealService.addMeal(newMeal);
    }
    this.router.navigate(['/feedmissionaries']);
  }

  // cancel the form and route back to the main meals component.
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
