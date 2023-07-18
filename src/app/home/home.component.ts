import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../share/models/Food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  food:any= Food;


  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void{
    this.food = this.foodService.getAll();
    this.route.params.subscribe( params => {
      if(params['searchTerm'])
        this.food = this.foodService.getAll().filter( food => 
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else if(params['tag'])
          this.food = this.foodService.getAllFoodsByTag(params['tag']);
      else if(params['origin'])
        this.food = this.foodService.getAllFoodsByOrigin(params['origin']);
      else
          this.food = this.foodService.getAll();
    } )
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
