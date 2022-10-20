import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {path:'' , component:ProductDetailComponent},
  {path: 'productview' , component:ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
