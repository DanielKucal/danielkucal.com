import {Component, OnInit} from 'angular2/core';
import {ProjectsService} from './projects.service';
import {ProjectsComponent} from './projects.component';
import {LanguagePickerComponent} from "./language-picker.component";
import {TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";

@Component({
    selector: 'angular-app',
    templateUrl: 'app/templates/app.component.html',
    providers: [
        ProjectsService
    ],
    directives: [
        ProjectsComponent,
        LanguagePickerComponent
    ],
    pipes: [
        TranslatePipe
    ]
})
export class AppComponent implements OnInit {
    public languages = {
        en: "English",
        pl: "Polski"
    };
    public chosenLang:String = null;

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
        var userLang = localStorage.getItem('lang') || navigator.language.split('-')[0]; // use navigator lang if available
        if (!this.languages.hasOwnProperty(userLang)) {
            userLang = 'en';
        }
        // this language will be used as a fallback when a translation isn't found in the current language
        this._translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this._translate.use(userLang);
    }

    changeLang(newLang):void {
        this.chosenLang = newLang;
        this._translate.use(newLang);
        localStorage.setItem('lang', newLang);
    }
}
