import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

@Input() price: number;
@Input() brand: string;
@Input() model: string;
@Input() size: number;
@Input() in_stock: number;
@Input() item_id: number;
@Input() picture: string;
@Input() release_date: string;
@Input() show_detail_link: true;

  constructor() { }

  ngOnInit() {
  }

}
