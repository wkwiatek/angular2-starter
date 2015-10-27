/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {ProductComponent} from './product/productComponent';
import {Product} from './product/product';

@Component({
    selector: 'products'
})
@View({
    templateUrl: 'src/template/products.html',
    directives: [ProductComponent, CORE_DIRECTIVES]
})
export class ProductsComponent {
    public products:Product[] = [];
    public product:Product;

    constructor() {
        this.product = new Product('first name', 'desc', 'http://lorempixel.com/400/200', 99, ['a', 'b']);
        this.products.push(this.product);
    }
}