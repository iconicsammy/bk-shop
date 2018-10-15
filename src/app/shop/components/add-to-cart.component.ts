import { Component, OnInit, Input } from '@angular/core';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() item_id: number;
  @Input() current_quantity: number;

  constructor(private shop_service: ShopService) { }

  addToCart(event, qty: number){
    /*
    Add item to the cart. Symbolic check of quantity here...it has to be more than zero. If needed, you can reject more than given quantity as well

    @input qty: the amount the user wants to buy

    @output void if true, else an alert about failure of the operation. If true, header will be notified and alert the user
    */
    event.preventDefault();

    if (qty <= 0){
      alert('enter quantity')
      return false;
    }


    const added_quantity = this.shop_service.addItemToCart(this.item_id, qty);

    if(added_quantity === false){
      alert('item failed to be added to your cart...try again');
    }




  }

  ngOnInit() {
  }

}
