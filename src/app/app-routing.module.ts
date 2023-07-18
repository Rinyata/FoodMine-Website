import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FavPageComponent } from './fav-page/fav-page/fav-page.component';

const routes: Routes = [
  {path: 'cart-page', component:CartPageComponent},
  {path: 'fav-page', component:FavPageComponent},
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'origin/:origin', component:HomeComponent},
  {path: 'food/:id', component:FoodPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
