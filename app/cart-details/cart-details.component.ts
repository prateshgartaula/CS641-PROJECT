import { Router } from '@angular/router';
import { ApiServiceService } from './../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  public cartList:Array<cartModel>=[];
  constructor(private apiCall:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
    this.apiCall.getRequest('http://localhost:3000/api/CartDetailsByUserId',{userid:sessionStorage.getItem("userId")}).subscribe((response)=>{
      response.recordsets[0].forEach(element => {
        this.cartList.push({quantity:element.Quantity,cartId:element.CartId,productName:element.ProductName,currentPrice:element.CurrentPrice,imageUrl:element.ImageUrl,inStock:element.InStock,productId:element.ProductId});
      });
    });
    
  }
  removeFromCart(event:any){
    this.apiCall.deleteRequest('http://localhost:3000/api/RemoveItemFromCartByCartId',{},{cartid:event.target.getAttribute('cartId')}).subscribe((response)=>{
      this.cartList=this.cartList.filter(a=> a.cartId!=event.target.getAttribute('cartId'));  
  });
    
  }
  fillDeteails():void{
    this.router.navigate(['/checkOut']);

  }

}
interface cartModel{
  cartId:number,
  productId:number,
  quantity:number,
  productName:string,
  currentPrice:number,
  inStock:boolean,
  imageUrl:string
} 
