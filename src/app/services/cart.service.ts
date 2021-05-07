import { EventEmitter, Injectable } from '@angular/core';

import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems :Item[] =[];

  itemSelectedEvent = new  EventEmitter<Item>();

  cartSizeChangeEvent = new  EventEmitter<number>();
 
  constructor() {  }
}
