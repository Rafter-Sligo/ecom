import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartComponent } from './components/cart/cart.component';
//services
import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';

//http
import { HttpClientModule} from "@angular/common/http";
import { AuthService } from './services/auth.service';

const appRoutes :Routes = [
  {path:"", component:ItemListComponent},
  {path:"cart",component:CartComponent},
  {path:"about",component:AboutComponent},
  {path:"categories",component:CategoriesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent,
    CartComponent,
    AboutComponent,
    CategoriesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CartService,ProductsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
