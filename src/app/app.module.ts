import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './servicers/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrService } from './servicers/toastr.service';
import { ProductComponent } from './product/product.component';
import { ProductService } from './servicers/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './servicers/payment.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';
import { FooterComponent } from './footer/footer.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductDetailsComponent,
    PaymentComponent,
    ProductListComponent,
    CartComponent,
    FooterComponent,
    OrderListComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [
    AuthService,
    ToastrService,
    ProductService,
    PaymentService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
