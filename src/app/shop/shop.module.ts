import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInformationComponent } from './item-information.component';
import { HomeComponent } from './home.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopItemComponent } from './components/shop-item.component';
import { AddToCartComponent } from './components/add-to-cart.component';
import { CheckOutComponent } from './check-out.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule, ReactiveFormsModule, FormsModule
  ],
  exports:[ ReactiveFormsModule, FormsModule],
  declarations: [ItemInformationComponent, ShopItemComponent, HomeComponent, AddToCartComponent, CheckOutComponent, SearchResultComponent]
})
export class ShopModule { }
