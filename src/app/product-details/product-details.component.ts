import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product:
    | {
        name: string;
        company: string;
        price: string;
        status: string;
        image: string;
      }
    | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.OnShowProductDetails.subscribe(
      (data: {
        name: string;
        company: string;
        price: string;
        status: string;
        image: string;
      }) => {
        this.product = data;
      }
    );
  }
}
