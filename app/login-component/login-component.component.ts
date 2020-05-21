import { AppComponent } from './../app.component';
import { ApiServiceService } from './../core/services/api-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'protractor';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public heading="Login to Shopping App"
  constructor(
    private apiService:ApiServiceService,
    private router : Router,  
    private authService : AuthService,
    private AppComponent:AppComponent ) { }
  @Input() userId="";
  @Input() password="";
  ngOnInit(): void {
    this.authService.logout(); 
  }
  login():void{
    if(this.userId===""||this.password===""){
      alert("UserName and password cannot be empty");
    }
    else{
      this.apiService.getRequest("//localhost:3000/api/UserLogin",{password:this.password,userid: this.userId }).subscribe((response)=>{
        // console.log(response.recordset);
        if(response.recordsets[0].length===1){
        sessionStorage.setItem('isLoggedIn', "true");
        sessionStorage.setItem('userId',response.recordsets[0][0].UserId);
        sessionStorage.setItem('userName',response.recordsets[0][0].FirstName);
        this.AppComponent.loggedIn=true;
        this.AppComponent.userName=response.recordsets[0][0].FirstName;
        this.router.navigate(['/home']);

        }
      },(error)=>{
        console.log(error);
      })
    }

  }
}
