import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedMissionariesComponent } from './feed-missionaries/feed-missionaries.component';
import { MealFormComponent } from './feed-missionaries/meal-form/meal-form.component';

// COMPONENT IMPORTS

// ESTABLISH ROUTES
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'feedmissionaries',
    component: FeedMissionariesComponent,
    children: [
      { path: 'new', component: MealFormComponent },
      { path: ':id/edit', component: MealFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
