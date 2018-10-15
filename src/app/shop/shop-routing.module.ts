import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemInformationComponent } from './item-information.component';
import { CheckOutComponent } from './check-out.component';
import { SearchResultComponent } from './search-result.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'check-out', component: CheckOutComponent},
    {path: 'search', component: SearchResultComponent},
    { path: 'item-detail/:item_id', component: ItemInformationComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
