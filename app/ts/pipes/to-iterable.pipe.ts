import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'toIterable'
})
export class ToIterablePipe implements PipeTransform {
    transform(dictionary: Object): Array<Object> {
        var array = [];
        for (var key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                array.push({key: key, val: dictionary[key]});
            }
        }
        return array;
    }
}