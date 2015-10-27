/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'sort',
    inputs: ['by', 'sorting'],
    outputs: ['updateSorting']
})
@View({
    templateUrl: 'src/template/sort.html',
    directives: [CORE_DIRECTIVES]
})
export class SortComponent {
    public by:string;
    public sorting;
    private updateSorting:EventEmitter = new EventEmitter();

    sort() {
        this.updateSorting.next({
            by: this.by,
            desc: !this.sorting.desc
        });
    }
}
