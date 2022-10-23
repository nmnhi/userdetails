import { EventEmitter } from '@angular/core';
export class ProductService {
  products = [
    {
      name: 'iPhone 11 Pro Max',
      company: 'Apple',
      price: '1000',
      status: 'Inactive',
      image: '../../assets/products/iPhone11promax.jpg',
    },
    {
      name: 'iPhone 12 Pro Max',
      company: 'Apple',
      price: '1200',
      status: 'Active',
      image: '../../assets/products/iPhone12promax.jpg',
    },
    {
      name: 'iPhone 13 Pro Max',
      company: 'Apple',
      price: '1500',
      status: 'Active',
      image: '../../assets/products/iPhone13promax.jpg',
    },
    {
      name: 'iPhone 14 Pro Max',
      company: 'Apple',
      price: '2000',
      status: 'Active',
      image: '../../assets/products//iPhone14promax.jpg',
    },
  ];
  OnShowProductDetails = new EventEmitter<{
    name: string;
    company: string;
    price: string;
    status: string;
    image: string;
  }>();
  OnShowProductDetailClicked(data: {
    name: string;
    company: string;
    price: string;
    status: string;
    image: string;
  }) {
    this.OnShowProductDetails.emit(data);
  }
}
