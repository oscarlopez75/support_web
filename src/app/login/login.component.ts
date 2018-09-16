import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom_form_validator';
import { GetTokenService } from '../get-token.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  password:string = '';
  username:string = '';
  titleAlert:string = 'This field is required';
  isLoggedIn = false;
  user: string;
  role: string;
  errorFound = false;
  errorMessage: string;


  constructor(private fb: FormBuilder, private getToken: GetTokenService,
    private authService: AuthService, private router: Router) {
    this.rForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': [null, Validators.compose([Validators.required, CustomValidators.validateCharacters])]
    });
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.user = this.authService.getUser();
    this.role = this.authService.getRole();
    console.log(this.isLoggedIn);
  }

  addPost(post){
    this.password = post.password;
    this.username = post.username;

    this.getToken.sendCredentials(this.username, this.password)
    .subscribe(
                data => {
                  console.log("Data: ");
                  this.userHasToken(data, true);
                },
                error => {
                  console.log("Error: ");
                  this.userHasToken(error, false);
                },
                () => {}
             );

  }

  userHasToken(userData, foundIt: boolean){

    if(foundIt){
      console.log(userData);
      sessionStorage.setItem('username', userData.username);
      sessionStorage.setItem('token', userData.jwt);
      sessionStorage.setItem('role', userData.role);
    }else{
      console.log(userData);
      this.errorFound = true;
      this.errorMessage = userData.error.message;
    }
    this.router.navigate(['home']);
  }

  logout(){
    this.authService.logout();

    this.router.navigate(['']);
  }

}
