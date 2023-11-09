import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // form = new FormGroup({
  //   email: new FormControl ('', [Validators.required, Validators.email]),
  //   password: new FormControl ('', [Validators.required])
  // })


  constructor( 
    private router : Router
  ) { }

  ngOnInit() {}

  
  navigateToMenu(){
    this.router.navigate(['/home'])
  }  

}
