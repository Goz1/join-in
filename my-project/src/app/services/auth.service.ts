import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

domain = "18.195.119.226:80/";
authToken;
user;
options;



  constructor(
    private http: Http,
    // public jwtHelper: JwtHelperService
  ) { }


  createAuthenticationHeaders(){

    this.loadToken();
    this.options= new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  registerUser(user){
    return this.http.post(this.domain + 'authentication/register', user).pipe(map(res => res.json()));
  }


  login(user){
    return this.http.post(this.domain + 'authentication/login', user).pipe(map(res => res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'authentication/profile',this.options).pipe(map(res => res.json()));
  }

  // loggedIn(){
  //   return this.jwtHelper.isTokenExpired();
  // }

}
