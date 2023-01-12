import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { LoadMoreButtonComponent } from './components/load-more-button/load-more-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaButtonGroupComponent } from './components/social-media-button-group/social-media-button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    RecommendationsComponent,
    LoadMoreButtonComponent,
    FooterComponent,
    SocialMediaButtonGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
