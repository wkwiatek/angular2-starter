/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Product} from './product';

@Component({
    selector: 'product',
    inputs: ['item']
})
@View({
    templateUrl: 'src/template/product.html',
    directives: [CORE_DIRECTIVES]
})
export class ProductComponent {
    private item:Product;

    constructor() {}

    addTag(newTag) {
        this.item.addTag(newTag.value);
        newTag.value = null;
    }
}
