import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'sortByValues'
})
export class SortByValuesPipe implements PipeTransform {
    transform(array: Array<any>, args: Array<any>): Array<Object> {
        let descending = (args[0] === 'desc') ? true : false;
        return array.sort(function(a, b){
            if (descending) {
                return b.val - a.val;
            }
            return a.val - b.val;
        });
    }
}