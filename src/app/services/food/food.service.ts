import { Injectable } from '@angular/core';
import { Food } from 'src/app/share/models/Food';
import { Origins } from 'src/app/share/models/Origins';
import { Tag } from 'src/app/share/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  food!:Food;
  constructor() { }

  origins = [
    {origin: "italy", icon: "fi fi-it" },
    {origin: "persia", icon: "fi fi-gr"}, 
    {origin: "middle east", icon: "fi fi-tr" }, 
    {origin: "china", icon:  "fi fi-cn"},
    {origin: "germany", icon:  "fi fi-de"}, 
    {origin: "us", icon:  "fi fi-us"}, 
    {origin: "belgium", icon: "fi fi-be" }, 
    {origin: "france", icon:  "fi fi-fr"}, 
    {origin: "india", icon:  "fi fi-in"}, 
    {origin: "asia", icon: "fi fi-jp" }
  ];

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!; // ! koymamızın sebebi undefined bi value gelirse return'u engellememizi sağlar.
  }

  getAllTags():Tag[]{
    return[
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag:string): Food[]{

    return tag == "All"? 
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  Foody = [
    {
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: '/assets/images/foods/food-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id: 2,
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl: '/assets/images/foods/food-2.jpg',
      tags: ['SlowFood', 'Lunch'],
    },
    {
      id: 3,
      name: 'Hamburger',
      price: 5,
      cookTime: '10-15',
      favorite: false,
      origins: ['germany', 'us'],
      stars: 3.5,
      imageUrl: '/assets/images/foods/food-3.jpg',
      tags: ['FastFood', 'Hamburger'],
    },
    {
      id: 4,
      name: 'Fried Potatoes',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/images/foods/food-4.jpg',
      tags: ['FastFood', 'Fry'],
    },
    {
      id: 5,
      name: 'Chicken Soup',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['india', 'asia'],
      stars: 3.0,
      imageUrl: '/assets/images/foods/food-5.jpg',
      tags: ['SlowFood', 'Soup'],
    },
    {
      id: 6,
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    }
  ]

  getAll():Food[]{
  return this.Foody;
  }

  getAllFoodsByOrigin(origin:string): Food[]{
    return origin == "All"? 
    this.getAll() : 
    this.getAll().filter(food => food.origins?.includes(origin));
  }

  getAllFoodsByFav(favorite:boolean): Food[]{
    return this.getAll().filter(food => food.favorite==true);
  }

  getAllOrigins():Origins[]{
    return this.origins;
  }

}
