import {Component, OnInit} from "angular2/core";
import {PersonalInformationService} from "./personal-information.service";
import {SkypePipe} from "./pipes/skype.pipe";
import {EmailPipe} from "./pipes/email.pipe";

@Component({
    selector: 'contact',
    template: `
    <ul class="contact-list list-group-item-text">
        <li *ngFor="#contact of contacts">{{contact.name}}: 
        <em [innerHtml]="contact.name === 'skype' ? (contact.value | skype) : (contact.value | email)"></em>
        </li>
    </ul>
  `,
    styles: ['.contact-list em { font-weight: bold; }'],
    pipes: [
        SkypePipe,
        EmailPipe
    ]
})
export class ContactComponent implements OnInit {
    public contacts: Promise<Array<Object>>;

    constructor(private _personalInformationService:PersonalInformationService){}

    ngOnInit(){
        this.getData().then(data => {
            this.contacts = data['contact'];
        });
    }

    getData(){
        return this._personalInformationService.getInformation();
    }
}
