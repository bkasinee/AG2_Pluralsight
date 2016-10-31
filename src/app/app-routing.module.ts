import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [      
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products',  component: ProductListComponent },
      { path: 'products/:id',  component: ProductDetailComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AG2PluralsightRoutingModule { }








