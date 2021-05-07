import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/cloud.service';
import { Item } from 'src/app/models/Item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  endpointSQS: String = "https://g5e2t08ied.execute-api.eu-west-1.amazonaws.com/dev/users/sqs"
  cartList : Item[] = [ ]

  constructor(private cartService :CartService,private productService:ProductsService, cloudService: CloudService) {
       
   }

  ngOnInit(): void {
      this.cartList = this.cartService.cartItems;

     this.cartService.itemSelectedEvent.subscribe((item:Item)=>{
       console.log("subscribed on selected button");
        this.addOrRemoveItemToCart(item);
        this.cartList = this.cartService.cartItems;
     })
  }

  addOrRemoveItemToCart(item){
    if(item.count==0)this.addItemToCart(item);
    else this.removeCartItem(item);
  }

  addItemToCart(newItem: Item){
    console.log("Added");
    
    newItem.count++;
    this.cartService.cartItems.push(newItem);
    //editable
    this.cartService.cartSizeChangeEvent.emit(this.cartService.cartItems.length);
  }

  removeCartItem(newItem: Item){  
    
    let index = this.cartService.cartItems.indexOf(newItem);
    this.cartList[index].count--; 
    console.log("Del");   
    console.log("index: ",index);
    this.cartService.cartItems.splice(index,1);
    //editable
    this.cartService.cartSizeChangeEvent.emit(this.cartService.cartItems.length);
  }

  onSubmit(){
  
  

  }

}
