import { Component } from '@angular/core';
import { Item } from './models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcommerce';
  currentSelected :Item =null;
  printSelectedItem(item){
    console.log("nana");
    
    console.log(item);
    this.currentSelected  = item;
  }
}
