import { Component } from '@angular/core';
import { Food } from '../share/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food:any= Food;
    
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params) => {
        if(params['id'])
        this.food = foodService.getFoodById(params['id']);
         console.log(this.food)

      })
    }

    addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
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
