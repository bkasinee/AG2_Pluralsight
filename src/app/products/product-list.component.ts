import { Component, OnInit } from '@angular/core';

import { IProduct } from './product'

import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService){
        
    }
    
    toggleImage(){
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        this._productService.getProducts()
        .subscribe(
            products => this.products = products)
    }

    onRatingClicked(message: string){
        this.pageTitle = 'Product List: ' + message;
    }
}