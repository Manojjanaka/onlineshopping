import { Component, OnInit } from '@angular/core';

import { ProductService } from '../servicers/product.service';
import { error } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories: Observable<Category[]>;
  products: Observable<Product[]>;
  selectedCategory: number;

  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    this.selectedCategory = 0;
    this.categories = this.productService.getCategory();
    this.loadProducts();
  }

  loadProducts(){
    console.log(this.selectedCategory)
    if (this.selectedCategory && this.selectedCategory != 0) {
      this.products = this.productService.getProductstoCategory(this.selectedCategory);
    }else{
      this.products = this.productService.getProducts();
    }
  }
}
