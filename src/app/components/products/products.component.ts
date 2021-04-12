import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product [] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProdcuts();
    console.log(this.products);
  }

}
