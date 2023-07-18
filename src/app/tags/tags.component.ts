import { Component, Inject, Input } from '@angular/core';
import { Tag } from '../share/models/Tag';
import { FoodService } from '../services/food/food.service';
import { Food } from '../share/models/Food';
import { Origins } from '../share/models/Origins';
import { OriginsService } from '../services/origins/origins.service';

@Component({
  selector: 'app-tags', //htmlde kullanacağımız ismi
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  food:any= Food;
  origins:any = Origins;

  @Input()
  foodPageOrigins?:string[];
  @Input()
  foodPageTags?:string[];
  tags?:Tag[];
  origin?:Origins[];
  
  constructor(private foodService:FoodService,) { 
    this.food = this.foodService.getAll();
  }

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
    if(!this.foodPageOrigins)
      this.origins = this.foodService.getAllOrigins();

  }
}
