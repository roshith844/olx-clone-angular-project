import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { LoadMoreButtonComponent } from './components/load-more-button/load-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    RecommendationsComponent,
    LoadMoreButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
