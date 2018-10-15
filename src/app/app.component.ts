import { Component, OnInit } from '@angular/core';
import {ShopService} from './services/shop.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private shop_service: ShopService
    ) {}

    ngOnInit() {


    this.shop_service.resetUserCart();

  }

}
