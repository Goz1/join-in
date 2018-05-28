import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      username:'',
      password:'',

    })
  }


  onLoginSubmit(){
    this.processing = true;
    const user ={
      username:this.form.get('username').value,
      password:this.form.get('password').value
    }

    this.authService.login(user).subscribe(data=>{
      if (!data.success){
        this.flashMessage.show(data.message, {cssClass:'alert-danger', timeout:3000});
      }else{
        this.flashMessage.show(data.message, {cssClass:'alert-success', timeout:3000});
        this.authService.storeUserData(data.token, data.user);
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        }, 2000); 
      }
    });
  }

  ngOnInit() {
  }

}
