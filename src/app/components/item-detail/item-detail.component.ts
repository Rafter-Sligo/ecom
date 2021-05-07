import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

    //alias is provided
   itemToDetail :Item ;

  constructor(private productService: ProductsService,private cartService : CartService)  { }

  ngOnInit(): void {
    this.productService.getDetailEvent.subscribe((item)=>{
      this.itemToDetail=item;
    })
  }

//   onClickItemBuy(item){
//     console.log("selected button clicked");
//     this.cartService.itemSelectedEvent.emit(item);
//  }
 
}
