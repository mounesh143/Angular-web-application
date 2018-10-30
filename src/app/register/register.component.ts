import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ AuthService ]
})
export class RegisterComponent implements OnInit {

  
  reguserData= {}
  constructor(private _auth : AuthService,
              private _router : Router) { }

  ngOnInit() {
  }
  
  RegisterUser()
  {
    this._auth.registerUser(this.reguserData).subscribe(
      res => { console.log(res)
      localStorage.setItem('token',res.token)
       this._router.navigate(['/specail']) 
    },
      err => console.log(err)
    )

  }
}
