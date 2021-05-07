import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClientModule} from "@angular/common/http";
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   
  itemList: Item[]=[];


 getDetailEvent= new EventEmitter<Item>();

 getItems(){
   return this.itemList;
 }
 
  constructor(private http:HttpClient) {
     this.http.get<Item[]>('https://fakestoreapi.com/products?limit=20')
     .subscribe((list)=>{
      // console.log(list.);
      list.map((item)=>{
        this.itemList.push({...item,count:0});
      })      
    })
            // .then(res=>res.json())
            // .then(json=>console.log(json))
   }
}
