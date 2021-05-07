import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileName:string;
  constructor(private cartService:CartService,private authService:AuthService) { }
  
  cartSize:number  =0
  ngOnInit(): void {
   this.authService.profileEvent.subscribe((details)=>{
        this.profileName=details.username;
   })

    this.cartService.cartSizeChangeEvent.subscribe(size=> this.cartSize = size);
  }


}
