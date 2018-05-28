import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ){
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      email:[''],
      username:'',
      password:'',

    })
  }


  onRegisterSubmit(){
    this.processing = true;
    const user ={
      email:this.form.get('email').value,
      username:this.form.get('username').value,
      password:this.form.get('password').value
    }

    this.authService.registerUser(user).subscribe(data => {
    if (!data.success){
    this.flashMessage.show('Something went wrong', {cssClass:'alert-danger', timeout:3000});
    this.router.navigate(['/register']);
    this.processing = false;
    }else{
      this.flashMessage.show('You are now registered and can login', {cssClass:'alert-sucess', timeout:3000});
      this.router.navigate(['/login']);
    }
    });
  }

  ngOnInit() {
  }

}
