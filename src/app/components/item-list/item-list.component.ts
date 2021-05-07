import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
//commented out as not using for data transfer
  // @Output() selectedEvent = new EventEmitter<Item>();

  constructor(private productService : ProductsService,private cartService : CartService) { }

  itemList :Item[]=[];
    
  ngOnInit(): void {
      console.log("Items loaded");
       this.itemList = this.productService.getItems();
  }

  onClickItem(item){
     console.log("event from list");
      this.productService.getDetailEvent.emit(item)
  }
 

}
