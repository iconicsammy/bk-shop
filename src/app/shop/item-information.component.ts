import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShopService} from '../services/shop.service';
import {IntfShopItem} from '../interfaces/interface-shop';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.css']
})
export class ItemInformationComponent implements OnInit {

  requested_item_id: number;

  show_detail_link = false; // we don't need to see Details link in the item information



  item_information = {'item_info': null , 'similar_items': null};

  // item_info will hold the info of the requested item while similar_items will hold sizes and quantities of the same brand

  route_sub;

  constructor(private route: ActivatedRoute, private shop_service: ShopService) {
     }


  ngOnInit() {
    /*
    Get the id of the item that was requested for view from the url

    */

        this.route_sub = this.route.params.subscribe(params => {
          this.requested_item_id = +params['item_id'];


          this. item_information = this.shop_service.itemInformation(this.requested_item_id);


       });

  }

}
