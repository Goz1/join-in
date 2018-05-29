import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  options;
  // domain =  this.authService.domain;

  constructor(
    private authService : AuthService,
    private http: Http
  ) { }

  createAuthenticationHeaders(){

    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }


    newBlog(blog){
    this.createAuthenticationHeaders();
    return this.http.post('blogs/newBlog', blog, this.options).pipe(map(res => res.json()));
  }


  getAllBlogs(){
    this.createAuthenticationHeaders();
      return this.http.get('blogs/allBlogs', this.options).pipe(map(res => res.json()));
  }

  getSingleBlog(id){
    this.createAuthenticationHeaders();
      return this.http.get('blogs/singleBlog/' + id, this.options)
      .pipe(map(res => res.json()));
  }

  editBlog(blog){
    this.createAuthenticationHeaders();
      return this.http.put('blogs/updateBlog/', blog, this.options)
      .pipe(map(res => res.json()));
  }


  deleteBlog(id){
    this.createAuthenticationHeaders();
      return this.http.delete('blogs/deleteBlog/' + id, this.options)
      .pipe(map(res => res.json()));
  }

  likeBlog(id){
    const blogData = { id: id};
    return this.http.put('blogs/likeBlog/', blogData, this.options)
    .pipe(map(res => res.json()));
  }

  dislikeBlog(id){
    const blogData = { id: id};
    return this.http.put('blogs/dislikeBlog/', blogData, this.options)
    .pipe(map(res => res.json()));
  }

}
