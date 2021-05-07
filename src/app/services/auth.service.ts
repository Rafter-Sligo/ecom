import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  username :string;
  password:string;
  profileEvent= new EventEmitter<any>();
  
  
  constructor() { }
  setDetails(username,password){
    console.log("SET");
    
      this.password=password;
      this.username=username;
  }
  getDetail(){
    return {username: this.username,password: this.password};
  }
}
