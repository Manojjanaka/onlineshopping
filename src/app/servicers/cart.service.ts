
import { Injectable } from "@angular/core";
import { Product } from "../models/products";
import { Observable, Subject } from "rxjs";
import { Cart } from "../models/cart";
import { Payment } from "../models/payment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[];
  baseUrl = 'api/';
  checkout: Payment;
  productCountEmitter: Subject<number> = new Subject();

  constructor(private http: HttpClient) { 
    this.items = [];
  }

  addToCart(productitem: Product): boolean {
    if (this.items.filter(x => x.id === productitem.id).length > -1) {
      this.items.push(productitem);
      this.productCountEmitter.next(this.items.length);
      return true;
    }
    return false;
  }

  getItems() {
    return this.items;
  }
  cleanCart() {
    this.items = [];
    return this.items;
  }
  paymentDetails(payment: Payment) {
    this.checkout = payment;
  }
  getPaymentDetails() {
    return this.checkout;
  }
  removeItems(id: number) {
    //this.items.splice(this.items.findIndex(x => x.id === id), 1);
  }
  postOrder(model: any) {
    return this.http.post(this.baseUrl + 'orders', model);
  }
  getOrder(id): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl + 'orders/' + id);
  }
  deleteOrderItem(id: number) {
    return this.http.delete(this.baseUrl + 'orders/' + id);
  }
}
