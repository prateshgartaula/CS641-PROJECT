import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean=true;
  userName:string="";
  title = 'ShoppingFrontEnd';
  constructor(private auth:AuthService,private route:Router){}
  ngOnInit():void{
    this.loggedIn=sessionStorage.getItem('isLoggedIn') == "true"? true:false;
    this.userName=sessionStorage.getItem('userName');
  }
  public logout(){
    this.auth.logout();
    location.reload();
  }
  public goToCart(){
    this.route.navigate(['/cart'])
  }
  public goHome(){
    this.route.navigate(['/home'])
  }
}
