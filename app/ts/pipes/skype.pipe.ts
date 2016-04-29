import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'skype'
})
export class SkypePipe implements PipeTransform {
    transform(nickname:String):String {
        return '<a href="skype:' + nickname + '?chat">' + nickname + '</a>';
    }
}