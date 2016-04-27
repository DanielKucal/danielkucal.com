import {Component, OnInit} from "angular2/core";
import {PersonalInformationService} from "./personal-information.service";

@Component({
    selector: 'contact',
    template: `
    <ul class="contact-list list-group-item-text">
        <li *ngFor="#contact of contacts">{{contact.name}}: <em>{{contact.value}}</em></li>
    </ul>
  `,
    styles: ['.contact-list em { font-weight: bold; }']
})
export class ContactComponent implements OnInit {
    public contacts: Promise<Array<Object>>;

    constructor(private _personalInformationService:PersonalInformationService){}

    ngOnInit(){
        this.getData().then(data => {
            this.contacts = data.contact;
        });
    }

    getData(){
        return this._personalInformationService.getInformation();
    }
}
