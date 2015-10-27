/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'filter',
    outputs: ['updateFiltering']
})
@View({
    templateUrl: 'src/template/filter.html',
    directives: [CORE_DIRECTIVES]
})
export class FilterComponent {
    private filterText:string;
    private updateFiltering:EventEmitter = new EventEmitter();

    filter(filterText) {
        this.updateFiltering.next(filterText.value);
    }
}
