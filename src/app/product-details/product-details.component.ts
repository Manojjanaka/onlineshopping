import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servicers/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/products';
import { CartService } from '../servicers/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productId: number;
  constructor(private productService: ProductService, 
    private toastr: ToastrService, 
    private cartService: CartService, 
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.loadProduct();
  }

  addToCart() {
    console.log(this.product);
    if (this.product.items == null) {
      this.product.items = 1;
    }
    if (this.cartService.addToCart(this.product)) {
      this.toastr.success(' product added to cart ');
    }
    else {
      this.toastr.error(' item already added  ');
    }
  }

  loadProduct() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe((product: Product) => {
      this.product = product;
    });
  }

}
