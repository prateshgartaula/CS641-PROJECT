import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FinalEndPageComponent } from './final-end-page/final-end-page.component';


const routes: Routes = [
  {path:'login',component:LoginComponentComponent},
  {path:'checkOut',component:AddToCartComponent},
  {path:'thankYou',component:FinalEndPageComponent},
  {path:'home',component:HomeComponentComponent,canActivate:[AuthGuard]},
  {path:'productDetails',component:ProductDetailsComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartDetailsComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'/home',pathMatch: 'full',canActivate:[AuthGuard]},
  { path: '**',redirectTo:'/home',pathMatch: 'full',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
