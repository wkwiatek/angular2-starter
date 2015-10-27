/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Product} from './product/product';

@Component({
    selector: 'starting-app'
})
@View({
    templateUrl: 'src/template/starting-app.html',
    directives: [Product]
})
export default class StartingApp {
    public hello:string = 'Hello, World!';
}
