import { AuthGuard } from './core/guard/auth.guard';
import { ApiServiceService } from './core/services/api-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponentComponent } from './login-component/login-component.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FinalEndPageComponent } from './final-end-page/final-end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    AddToCartComponent,
    FinalEndPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
