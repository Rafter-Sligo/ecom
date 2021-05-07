import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/cloud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username :string;
  password:string;  //ngmodel set

  constructor(private authService:AuthService, CloudService: CloudService) { }

  onSubmit(){
    this.authService.profileEvent.emit({username:this.username,password:this.password});


  }
  ngOnInit(): void {

  }

}
