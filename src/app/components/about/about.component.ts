import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/cloud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  email :string;
  password:string;  //ngmodel set

  constructor(private authService:AuthService,cloudService: CloudService) { }

  onSubmit(data){
    this.email = data.emailid;
    this.password = data.passwd;
    console.log(this.email, this.password)
    this.authService.profileEvent.emit({username:this.email,password:this.password});
  }

  ngOnInit(): void {
  }

}
