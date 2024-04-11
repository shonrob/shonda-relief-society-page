import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meal } from '../feed-missionaries.model';
import { FeedMissionariesService } from '../feed-missionaries.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastComponent } from '../../toast/toast.component';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrl: './meal-item.component.css',
})
export class MealItemComponent {
  @Input() meal: Meal;
  @Input() id: string;

  constructor(
    private feedMissionariesService: FeedMissionariesService,
    public dialog: MatDialog
  ) {}

  deleteMe() {
    const dialogRef = this.dialog.open(ToastComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reallyDeleteMe();
      }
    });
  }

  reallyDeleteMe() {
    this.feedMissionariesService.deleteMeal(this.meal);
  }
}
