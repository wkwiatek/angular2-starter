/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {ProductsComponent} from './products/productsComponent';

@Component({
    selector: 'starting-app'
})
@View({
    templateUrl: 'src/template/starting-app.html',
    directives: [ProductsComponent]
})
export default class StartingApp {}
