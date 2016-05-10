import {Component, OnInit} from "angular2/core";
import {PersonalInformationService} from "./personal-information.service";
import {LanguageService} from "./language.service";

@Component({
    selector: 'about',
    template: `<p [innerHtml]="about"></p>`
})
export class AboutComponent implements OnInit {
    public about: Promise<Object>;

    constructor(private _personalInformationService:PersonalInformationService, private _languageService:LanguageService){
        this._languageService.langChanged$.subscribe((event) => this.filterLang(event));
    }

    ngOnInit(){
        this.filterLang();
    }

    getData(){
        return this._personalInformationService.getInformation();
    }

    filterLang(newLang:string = null){
        this.getData().then(data => {
            this.about = data['about'][newLang || this._languageService.getLanguage()];
        });
    }
}
