/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {ProductComponent} from './product/productComponent';
import {Product} from './product/product';
import {SortComponent} from '../common/sortComponent';

@Component({
    selector: 'products'
})
@View({
    templateUrl: 'src/template/products.html',
    directives: [ProductComponent, SortComponent, CORE_DIRECTIVES]
})
export class ProductsComponent {
    public products:Product[];
    public product:Product;
    public sorting;

    constructor() {
        this.sorting = {
            by: 'price',
            desc: true
        };
        this.products = [
            new Product('first name', 'desc', 'http://lorempixel.com/400/200?1', 99, ['a', 'b']),
            new Product('2nd name', 'longer description', 'http://lorempixel.com/400/200?2', 250, ['wow', 'such good']),
            new Product('acs', 'desc', 'http://lorempixel.com/400/200?3', 120, ['test'])
        ];
    }

    sort($event) {
        this.sorting = $event;
        this.products.sort((first:Product, second:Product) => {
            if (first[this.sorting.by] === second[this.sorting.by])
                return 0;
            if (first[this.sorting.by] < second[this.sorting.by])
                return this.sorting.desc ? 1 : -1;
            else
                return this.sorting.desc ? -1 : 1;
        });
    }
}