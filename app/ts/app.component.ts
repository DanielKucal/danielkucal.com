import {Component, OnInit} from "angular2/core";
import {ProjectsService} from "./projects.service";
import {ProjectsComponent} from "./projects.component";
import {LanguagePickerComponent} from "./language-picker.component";
import {TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";
import {LanguageService} from "./language.service";
import {PersonalInformationService} from "./personal-information.service";
import {ContactComponent} from "./contact.component";
import {AboutComponent} from "./about.component";

@Component({
    selector: 'angular-app',
    templateUrl: 'app/templates/app.component.html',
    providers: [
        ProjectsService,
        LanguageService,
        PersonalInformationService
    ],
    directives: [
        ProjectsComponent,
        LanguagePickerComponent,
        ContactComponent,
        AboutComponent
    ],
    pipes: [
        TranslatePipe
    ]
})
export class AppComponent implements OnInit {

    constructor(private _translate:TranslateService, private _languageService:LanguageService) {
        this._languageService.langChanged$.subscribe(event => this.onLangChange(event));
    }

    ngOnInit() {
        this._translate.setDefaultLang('en');
        this._translate.use(this._languageService.getLanguage());
    }

    onLangChange(newLang):void {
        this._translate.use(newLang);
    }
}
