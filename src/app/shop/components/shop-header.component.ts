import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ShopService} from '../../services/shop.service';
@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent implements OnInit {

  private subscription: Subscription;

  total_in_cart = 0;

  constructor(private shop_service: ShopService) { }

  ngOnInit() {

    // subscribe to the shop service cart adding service

    this.subscription = this.shop_service.itemAddedToCart
    .subscribe(value => {

        // value is integer now. If true, an item has been added to the cart

         if (value > 0) {
           alert('You have added an item...to check out click the check out button on top');
           this.total_in_cart += +value;
         }
         else if (value==-1){
           // cart has being emptied
           this.total_in_cart=0;
         }




    });




  }

}
