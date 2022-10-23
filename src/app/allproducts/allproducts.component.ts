import { ProductService } from './../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  constructor(private productsService: ProductService) {}
  products: {
    name: string;
    company: string;
    price: string;
    status: string;
    image: string;
  }[] = [];
  ngOnInit(): void {
    this.products = this.productsService.products;
  }
  OnClickedProduct(product: {
    name: string;
    company: string;
    price: string;
    status: string;
    image: string;
  }) {
    this.productsService.OnShowProductDetailClicked(product);
  }
}
