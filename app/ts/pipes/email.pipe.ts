import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'email'
})
export class EmailPipe implements PipeTransform {
    transform(email:String):String {
        return '<a href="mailto:' + email + '">' + email + '</a>';
    }
}