import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {IntfShopItem} from '../interfaces/interface-shop';



import {shopItems} from '../../data/store';

@Injectable()
export class ShopService {

  itemAddedToCart = new BehaviorSubject<number>(0); // assume change yet
  // fired whenever an item is added to cart so header or other components that subscribed to the detection can be notified

  constructor() {
    this.itemAddedToCart = new BehaviorSubject<number>(0);
   }

  // --------------------Start browseStore method --------------

  user_cart = []; //


  _findItem(item_id: number) {

    /*
    find item. In practical world, move it to a shared functions class

    @input item_id: the item to be searched

    @output found item or null if not found
    */

      const total_items = shopItems.length;

      let item_info: IntfShopItem = null;

      for (let counter = 0; counter < total_items; counter++) {

            if (shopItems[counter]['id'] === item_id) {
              //found item

              item_info = shopItems[counter];
              break;

            }
        }

    return item_info;

  }




  _updateItemQuantity(item_id: number, qty: number) {

    /*
    find item. In practical world, move it to a shared items functions class

    @input item_id: the item to be adjusted
    @input qty: the amount to reduce the current quantity by

    @output void
    */

      const total_items = shopItems.length;



      for (let counter = 0; counter < total_items; counter++) {

            if (shopItems[counter]['id'] === item_id) {
              // found item. Reduce quantity

              shopItems[counter]['in_stock'] -= qty;


              break;

            }
      }



  }


  addItemToCart(item_id: number, quantity: number){
    /*
    Add the given item to the cart.

    @input item_id: the id of the item to be put to the cart
    @input quantity: how many of the items are to be placed

    @output void()

    */

      const item_info: IntfShopItem  = this._findItem(item_id);

        // does the item exist?
        if (item_info !== null){
          // item is found. Do we have the requested quantity?

          const can_buy_quantity: number = quantity - item_info['in_stock'];

          if (can_buy_quantity >= 0) {
            // wants to buy more than we have or all we have in stock. so reset quantity to in stock now
            quantity = item_info['in_stock'];
          }

          // add to cart now. do we have the item already in the cart? If so, just add quantity else add a new cart item

          let add_new = true;

          for (let counter = 0; counter < this.user_cart.length; counter++ ){

              if ( this.user_cart[counter]['item_id'] === item_id) {
                // item is already in cart. just append quantity to it

                this.user_cart[counter]['qty'] += quantity;
                this.user_cart[counter]['cost'] = this.user_cart[counter]['qty'] * item_info['price']

                add_new = false;
              }
          }

          if(add_new){
            this.user_cart.push({'item_id': item_id, 'qty': quantity, 'cost': quantity * item_info['price'] });
          }

          // adjust the quantity in store now

          this._updateItemQuantity(item_id, quantity);

          this.itemAddedToCart.next(quantity);


            return true;


        }

        else {
          return false;
        }

  }

  browseStore() {
  	/*
  	 Browse store for sneakers. Show the latest 10 items only based on date

    */

    // make a copy of the items in store
      const items: IntfShopItem[] = shopItems;

        // sort them by date
        items.sort(function(a, b) {

          return b.release_date.localeCompare(a.release_date);

        });

        // Get the first 10 only. so get rid of the other items

        items.splice(10);

        return items;


  }





  searchStore(name: string, max_price: number) {
  	/*
    Search store for sneakers

    @input name: model name. Optional
    @input max_price: The maximum price of the shoe

    */



      const that = this;

      name= name.toLowerCase();

      const items: IntfShopItem[] = shopItems.filter(function(item) {

                 if(name && max_price>0){
                   return item['price'] <= max_price && item['model'].toLowerCase().indexOf(name)>-1;
                 }
                 else if(name && max_price <=0){
                  return item['model'].toLowerCase().indexOf(name)>-1;
                 }
                 else if(!name && max_price>0){
                  return item['price'] <= max_price;
                }

      });

console.log(items);

        return items;


  }

  itemInformation(item_id: number) {
  	/*
    Return information about the given item. Return null if not found

    @input item_id: Number. The id of the item whose information we want to return
    @output: a dictionary object: item_info storing information of the requested item, while similar_items will hold items of same brand but different size

    If not found, item_info will be null

    */

        const item_info = {'item_info': null, 'similar_items': null };

        item_info['item_info'] = this._findItem(item_id);

        const total_items = shopItems.length;

        // if it is found, get similar items as well

        if (item_info['item_info'] != null) {

          const items: IntfShopItem[] = [];

          const model: string = item_info['item_info']['model'];

          for (let counter = 0; counter < total_items; counter++) {

            if (shopItems[counter]['id'] !== item_id && shopItems[counter]['model'] === model) {

              // found similar item

              items.push(shopItems[counter]);



            }
        }



          item_info['similar_items'] = items;

        }



     return item_info;




  }

  resetUserCart()
  {
    this.user_cart = [];
    this.itemAddedToCart.next(-1);
  }


  currentCartValue(){
    /*
    The current cart of the user. Return total cost
    */

    let total=0;

    this.user_cart.forEach(value => {
          total += value['cost'];
    })

    return total;
  }


  checkOut(form_data){
    /*
    Check out. Simply clear the current cart

    @input form_data: payment information to be processed
    */
   this.user_cart = [];

   return true;
  }










}
