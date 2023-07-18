import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/share/models/Food';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent {
  food:any= Food;

  constructor(activatedRoute:ActivatedRoute,
    foodService: FoodService) {
      activatedRoute.params.subscribe((params) => {
        this.food = foodService.getAllFoodsByFav(true);

      })
    }

  makeFav(foody:Food):boolean{
    if(foody.favorite===true){
      foody.favorite = false; 
      for(this.food in Food){
        if(this.food.id == foody.id){
          this.food.id = false;
        }
      }
    }
    else{
      foody.favorite = true;
      for(this.food in Food){
        if(this.food.id == foody.id){
          this.food.id = true;
        }
      }
    }
    return (foody.favorite === true)?true:false;
  }
  
}
