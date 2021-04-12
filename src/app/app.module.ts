import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import {ProductService } from '../../src/app/services/product.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
