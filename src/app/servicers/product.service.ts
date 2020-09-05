import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { Product } from "../models/products";
import { HttpClient } from "@angular/common/http";
import { Category } from "../models/category";
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: "root"
})

export class ProductService {
  baseUrl = 'api/';
  products: Product[] = [];
  categories: Category[] = [];


  constructor(private http: HttpClient, private toastr: ToastrService) {
    let product: Product = <Product>{
      id: 1,
      categoryId:1,
      name: "Shirt",
      price: 12,
      image: "//i.ezbuy.sg/Fo_Y5eTmGkQRRTbSsMoD2wM2_Pvf?imageView2/2/w/600/h/600/q/90/format/webp",
      description: "men's sports quick drying ice silk fitness summer clothing breathable running short-sleeved t-shirt men ...",
      items: 0,
    }
    this.products.push(product);
    let product2: Product = <Product>{
      id: 2,
      categoryId:2,
      name: "newkorean style",
      price: 12,
      image: "//i.ezbuy.sg/FhDD66c8ovcQiFFcMvmxPEGy8FGr?imageView2/2/w/600/h/600/q/90/format/webp",
      description: "newkorean style loose fashion gradient color ins tied short-sleeved Harajuku bf port wind T-shirt YouTube half-sleeved women's top",
      items: 0,
    }
    this.products.push(product2);
    
    let category: Category = <Category>{
      categotyId: 1,
      categoryName: 'Shirts Men'
    }
    this.categories.push(category);
    let category1: Category = <Category>{
      categotyId: 2,
      categoryName: 'Shirts Women'
    }
    this.categories.push(category1);

  }


  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.baseUrl + 'products');
    return Observable.create(observer => {
      observer.next(this.products);
      observer.complete();
    });

  }
  getProduct(id): Observable<Product> {
    // return this.http.get<Product>(this.baseUrl + id);
    return Observable.create(observer => {
      console.log(id)
      console.log(this.products.filter(x=> x.id == id))
      observer.next(this.products.filter(x=> x.id == id)[0]);
      observer.complete();
    });
  }

  getCategory(): Observable<Category[]> {
    // return this.http.get<Category[]>(this.baseUrl + 'categories');
   
    return Observable.create(observer => {
      observer.next(this.categories);
      observer.complete();
    });
  }

  getProductstoCategory(id: number): Observable<Product[]> {
    // return this.http.get<Product[]>(this.baseUrl + 'products/category/' + id);
    return Observable.create(observer => {
      observer.next(this.products.filter(h=> h.categoryId == id));
      observer.complete();
    });
  }



  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error

      errorMessage = `Error: ${error.error.message}`;

    } else {

      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    this.toastr.error(errorMessage);

    return throwError(error);

  }

}


