import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'email'
})
export class EmailPipe implements PipeTransform {
    transform(email:String):String {
        return '<a href="mailto:' + email + '" ' +
            'title="Send email to ' + email + '">' +
            email + '</a>';
    }
}