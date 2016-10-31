import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product'
import { ProductService } from './product.service';

import { StarComponent } from '../shared/star.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    sub: any;

    constructor(private productService: ProductService,
               private route: ActivatedRoute,
               private _router:Router){
    }

    ngOnInit(){

        this.sub = this.route.params.subscribe(params => {
          let id=Number.parseInt(params['id']);
          this.pageTitle += ` : ${id}`;
          this.productService.getProduct(id)
            .subscribe(
            product => this.product = product);
        });

    }

    onBack(){
      this._router.navigate(['products']);

    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
} 



