import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../share/models/Food';
import { Cart } from '../share/models/Cart';
import { CartItem } from '../share/models/CartItem';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cart!:Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }


  rollme():Food["id"]{
    return this.getRandomInt(6)+1;
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

}