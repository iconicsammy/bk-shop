import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {IntfShopItem} from '../../interfaces/interface-shop';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  constructor( private router: Router) { }

  searchItems(name: string, max_price: number){

    // simply redirect to search page wit the values

    this.router.navigate(['/search'], { queryParams: { name: name, max_price: max_price } });



  }

  ngOnInit() {
  }

}
