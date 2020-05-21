import { Router } from '@angular/router';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../core/services/api-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private auth:AuthService,private apiCall:ApiServiceService,private router:Router) { }
  public categories:Array<string>=[] ;
  public productList:Array<productDetails>=[];
  userName:string;
  ngOnInit(): void {
    this.apiCall.getRequest('http://localhost:3000/api/Categories',{}).subscribe((response)=>{
      response.recordsets[0].forEach(element => {
        this.categories.push(element.CategoryName+"|"+element.CategoryId);
        
      });
    });
    this.apiCall.getRequest('http://localhost:3000/api/ProductsByCategory',{categoryid:"100"}).subscribe((response)=>{
      response.recordsets[0].forEach(element => {
        this.productList.push({productName:element.ProductName,price:element.CurrentPrice,imageUrl:element.ImageUrl,inStock:element.InStock,productId:element.ProductId});
      });
    });
  }


  
  public categoryChange(response:any){
    this.productList=[];
    this.apiCall.getRequest('http://localhost:3000/api/ProductsByCategory',{categoryid:response.target.getAttribute('catId')}).subscribe((response)=>{
      response.recordsets[0].forEach(element => {
        this.productList.push({productName:element.ProductName,price:element.CurrentPrice,imageUrl:element.ImageUrl,inStock:element.InStock,productId:element.ProductId});
      });
    });

  }
  public productDetails(response:any){
    this.router.navigate(['productDetails'], { queryParams: { productId: response.target.getAttribute('prodId')} });
  }

}
interface productDetails {
  productId:number
  productName:string,
  price:number,
  imageUrl:string,
  inStock:boolean
}

