import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedMissionariesComponent } from './feed-missionaries/feed-missionaries.component';
import { MealFormComponent } from './feed-missionaries/meal-form/meal-form.component';
import { MealItemComponent } from './feed-missionaries/meal-item/meal-item.component';
import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FeedMissionariesComponent,
    HomeComponent,
    MealFormComponent,
    MealItemComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    TabMenuModule,
    HttpClientModule,
    MatButtonModule,
    ScrollingModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],

  exports: [MatDatepickerModule],
})
export class AppModule {}
