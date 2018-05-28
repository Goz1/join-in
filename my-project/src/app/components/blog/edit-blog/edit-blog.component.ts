import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  message;
  messageClass;
  blog;
  processing = false;
  currentUrl;
  loading = true;




  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  updateBlogSubmit(){
    this.processing = true;
    this.blogService.editBlog(this.blog).subscribe(data =>{
      if(!data.success){
        this.flashMessage.show(data.message,{
          cssClass:'alert-danger',
          timeout: 5000, });
          this.processing = false;
      } else {
        this.flashMessage.show(data.message,{
          cssClass:'alert-success',
          timeout: 5000, });
          setTimeout(()=>{
          this.router.navigate(['/blog']);
        },2000);
      }
    });//fuction to update blog
  }//submit update to blog

  goBack(){
    this.location.back();

  }
  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data=>{
      if(!data.success){
        this.flashMessage.show(data.message,{
          cssClass:'alert-danger',
          timeout: 5000, });
      } else{
        this.blog = data.blog;
        this.loading = false;
      }
    });
  }

}
