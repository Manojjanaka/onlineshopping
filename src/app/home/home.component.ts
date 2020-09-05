import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSources: (string | IImage)[] = [
    { url: 'https://colorlib.com/preview/theme/selling/images/hero_2.jpg', caption: 'New Arrivals'},
    { url: 'https://colorlib.com/preview/theme/divisima/img/bg.jpg', caption: 'New Arrivals' },
    { url: 'https://colorlib.com/preview/theme/divisima/img/bg-2.jpg', caption: 'New Arrivals' },
  ];

  constructor() {

  }

  ngOnInit() {
  }
}
