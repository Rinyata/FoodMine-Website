import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OriginsService } from './services/origins/origins.service';
import { OriginsComponent } from './origins/origins/origins.component';
import { FavPageComponent } from './fav-page/fav-page/fav-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OriginsComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    OriginsComponent,
    FavPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [
    OriginsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
