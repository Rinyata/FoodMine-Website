import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../share/models/Cart';
import { CartItem } from '../share/models/CartItem';
import { Food } from '../share/models/Food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
    const cartButtons = document.querySelectorAll(".cart__button");
    cartButtons.forEach((button: any) => {
      button.addEventListener("click", this.cartClick);
    });
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  cartClick(this: any) {
    let button = this;
    button.classList.add("clicked");
  }

}