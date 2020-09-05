import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../servicers/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private toastr: ToastrService, 
    private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    if (this.cartService.addToCart(this.product)) {
      this.toastr.success(' product added to cart ');
    }else {
      this.toastr.error(' item already added  ');
    }
  }
}
