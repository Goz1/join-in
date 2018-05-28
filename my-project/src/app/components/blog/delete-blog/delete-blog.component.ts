import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

  message;
  messageClass;
  blog;
  processing = false;
  currentUrl;
  foundBlog = false;

  constructor(
    private blogService:BlogService,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }



  deleteBlog(){
    this.processing = true;
    this.blogService.deleteBlog(this.currentUrl.id).subscribe(data =>{
      if(!data.success){
        this.flashMessage.show(data.message,{
          cssClass:'alert-danger',
          timeout: 5000, });
      } else {
        this.flashMessage.show(data.message,{
          cssClass:'alert-success',
          timeout: 5000, });
          setTimeout(()=>{
            this.router.navigate(['/blog']);
          },2000);
      }
    });

  }


  ngOnInit() {
    this.currentUrl =  this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data =>{
      if(!data.success){
        this.flashMessage.show(data.message,{
          cssClass:'alert-danger',
          timeout: 5000, });
      } else {
        this.blog = {
          title: data.blog.title,
          body: data.blog.body,
          createdBy: data.blog.createdBy,
          createdAt: data.blog.createdAt
        }
        this.foundBlog = true;
        this.message = true;
      }
    });
  }

}
