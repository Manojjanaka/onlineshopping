import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicers/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  constructor(private authservice: AuthService) {
  }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authservice.decodedToken = this.jwtHelper.decodeToken(token); 
    }

  }

}
