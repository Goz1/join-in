import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;
  username;
  blogPosts;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private blogService: BlogService,
    private flashMessage: FlashMessagesService
  ) {
    this.createNewBlogForm();
  }


  createNewBlogForm(){
      this.form = this.formBuilder.group({
        host: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5)
        ])],
        title: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(5),
          this.alphaNumericValidation
        ])],
        body:['',Validators.compose([
          Validators.required,
          Validators.maxLength(5000),
          Validators.minLength(5)
        ])],
        venue: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(5),
          this.alphaNumericValidation
        ])]
      })
    }

    enableFormNewBlogForm(){
      this.form.get('host').enable();
      this.form.get('body').enable();
      this.form.get('title').enable();
      this.form.get('venue').enable();
    }

    disableFormNewBlogForm(){
      this.form.get('host').disable();
      this.form.get('body').disable();
      this.form.get('title').disable();
      this.form.get('venue').disable();
    }


    alphaNumericValidation(controls){
  const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
  if(regExp.test(controls.value)){
    return null;
  } else{
    return{'alphaNumericValidation': true}
  }
}

  newBlogForm(){
    this.newPost =true;
  }

  reloadBlogs(){
    this.loadingBlogs = true;
    this.getAllBlogs();//Get all Blogs
    setTimeout(()=>{
    this.loadingBlogs = false;
    },4000);
  }


  onBlogSubmit(){
    this.processing = true;
    this.disableFormNewBlogForm();

    const blog = {
      host: this.form.get('host').value,
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      venue: this.form.get('venue').value,
      createdBy: this.username
    }

    this.blogService.newBlog(blog).subscribe(data => {
      if(!data.success){
        this.flashMessage.show(data.message,{
          cssClass:'alert-danger',
          timeout: 5000, });
        this.processing = false;
        this.enableFormNewBlogForm();
      } else {
        this.flashMessage.show(data.message, {
          cssClass:'alert-success',
          timeout: 5000 });
          this.getAllBlogs();
        setTimeout(() =>{
          this.newPost = false;
          this.processing = false;
          // this.message = false;
          this.form.reset();
          this.enableFormNewBlogForm();
        }, 2000);
      }
    });
  }

  goBack() {
    window.location.reload();
  }


  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
    });
  }

  likeBlog(id){
    this.blogService.likeBlog(id).subscribe(data =>{
      this.getAllBlogs();
    });
  }

  dislikeBlog(id){
    this.blogService.dislikeBlog(id).subscribe(data =>{
      this.getAllBlogs();
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{
      this.username = profile.user.username;
    });

    this.getAllBlogs();
  }

}
