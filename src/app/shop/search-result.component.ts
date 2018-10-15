import { Component, OnInit } from '@angular/core';
import {IntfShopItem} from '../interfaces/interface-shop';
import {ShopService} from '../services/shop.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  show_detail_link = true;

  name = '';
  max_price = 0;

  items: IntfShopItem[] = []; // items in our store

  constructor(private shop_service: ShopService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.name =  this.route.snapshot.queryParamMap.get('name');
    this.max_price =  +this.route.snapshot.queryParamMap.get('max_price');


    this.items = this.shop_service.searchStore(this.name, this.max_price);



  }
}
