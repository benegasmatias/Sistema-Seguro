import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient) { }

  
  
  login(user:User) {
    let usernam=user.username,passwor=user.password;

    return this.http.post('/myapp/users/authlogin',{
      username:usernam,
      password:passwor
    });     
  }

  addUser(user:User){
    return this.http.post('https://reqres.in/api/add',user)
  }
}
