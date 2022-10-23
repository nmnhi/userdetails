import { ProductService } from './Services/products.service';
import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, ProductService],
})
export class AppComponent {
  title = 'userdetailsservice';
  constructor(
    private userService: UserService,
    private productsService: ProductService
  ) {}
}
