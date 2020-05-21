import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  finalEndpage():void{
    this.router.navigateByUrl('/thankYou');
  }

}
