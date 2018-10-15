import { Component, OnInit } from '@angular/core';
import {IntfShopItem} from '../interfaces/interface-shop';
import {ShopService} from '../services/shop.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show_detail_link = true;

  items: IntfShopItem[] = []; // items in our store

  constructor(private shop_service: ShopService) { }

  ngOnInit() {
    this.items = this.shop_service.browseStore();
  }

}
