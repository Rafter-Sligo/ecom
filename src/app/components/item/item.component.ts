import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


import {Item} from "../../models/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  //alias is provided
  @Input("listToItem") item :Item ;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  /////
  onClickItemBuy(item){
    this.item=item;
    if(item.count==0){
      console.log("selected button clicked");
      this.cartService.itemSelectedEvent.emit(item);
    }
    else if(this.item.count>0){
       this.removeCartItem(this.cartService.cartItems.indexOf(item));
    }
    
 }
 removeCartItem(index:number){  
   
  this.item.count--;    

  console.log("index: ",index);
  this.cartService.cartItems.splice(index,1);
  this.cartService.cartSizeChangeEvent.emit(this.cartService.cartItems.length);
}


}
