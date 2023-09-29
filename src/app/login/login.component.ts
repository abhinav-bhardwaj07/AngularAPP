import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private login: UserdataService)
 {

 }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }


  get Password():FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  PostdataForLogin()
  {
    this.login.CheckLogin([this.loginForm.value.email ??"" , this.loginForm.value.password?? ""])
    .subscribe(res => {
      alert(res);
    });
    //console.log(this.loginForm);
    
  }

}
