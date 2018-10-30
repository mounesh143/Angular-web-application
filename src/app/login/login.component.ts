import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

  loginData ={}
  constructor(private _auth: AuthService,
              private _router : Router) { }

  ngOnInit() {
  }
  LoginUser()
  {
  this._auth.loginUser(this.loginData).subscribe(
       res => { console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/events']) 
    },
    err => console.log(err)
  )
  }
}
