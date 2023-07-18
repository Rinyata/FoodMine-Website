import { Injectable } from '@angular/core';
import { Food } from 'src/app/share/models/Food';
import { Origins } from 'src/app/share/models/Origins';
import { FoodService } from '../food/food.service';


@Injectable({
  providedIn: 'root'
})
export class OriginsService {

  food!:Food;
  
  constructor() { }


}
