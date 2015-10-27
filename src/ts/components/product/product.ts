/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'product'
})
@View({
    templateUrl: 'src/template/product.html',
    directives: [CORE_DIRECTIVES]
})
export class Product {
    public name:string = 'First product';
    public description:string = 'First product description';
    public imageUrl:string;
    public price:number = 99;

    constructor() {
        this.imageUrl = 'http://lorempixel.com/200/100';
    }
}
