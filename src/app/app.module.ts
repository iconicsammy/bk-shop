import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {ShopService} from './services/shop.service';
import { ShopHeaderComponent } from './shop/components/shop-header.component';
import { SearchItemsComponent } from './shop/components/search-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent, SearchItemsComponent
  ],
  imports: [
    BrowserModule , AppRoutingModule
  ],
  exports:[ShopHeaderComponent ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
