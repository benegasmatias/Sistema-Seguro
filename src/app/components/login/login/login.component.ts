import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {LoginService} from '../../../service/login.service';
import {Router} from '@angular/router'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  user:User=new User();
  constructor(
    protected loginService:LoginService,
              private route:Router
    ) { }
  ngOnInit() {
    
  }

  login(){
 
   let respuesta;
  this.loginService.login(this.user).
  subscribe(
    data=>{  
      respuesta=data['status'];
      console.log(respuesta)
      this.route.navigate(['/clients/list'])
      let app:AppComponent
      app.userlogin=true
    }
      ,
  err=>console.log(err))
    
  }

  addUser(){

  }

}
