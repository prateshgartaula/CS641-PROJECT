import { ApiServiceService } from './../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private apiCall:ApiServiceService,private route: ActivatedRoute) { }
  productName="";
  price:number;
  imageUrl:string="";
  inStock:boolean;
  productId:number;
  showProduct:boolean=false;
  cartMessage="";
  ngOnInit(): void {
    this.apiCall.getRequest('http://localhost:3000/api/ProductByProductId',{productid:this.route.snapshot.queryParamMap.get("productId")}).subscribe((response)=>{
      response.recordsets[0].forEach(element => {
        this.productName=element.ProductName;
        this.price=element.CurrentPrice;
        this.imageUrl=element.ImageUrl;
        this.inStock=element.InStock;
        this.productId=element.ProductId;
        this.showProduct=true;
      });
    });
  }
  addToCart(){
    this.apiCall.postRequest('http://localhost:3000/api/AddToCart',{},{productid:this.productId.toString(),userid:sessionStorage.getItem("userId"),quantity:"1"}).subscribe((response)=>{
      this.cartMessage="Added to cart successfully";
    });
  }

}
