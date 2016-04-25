import {Component, OnInit} from 'angular2/core';
import {ProjectsService} from './projects.service';
import {ProjectsComponent} from './projects.component';
import {LanguagePickerComponent} from "./language-picker.component";
import {TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";
import {LanguageService} from "./language.service";

@Component({
    selector: 'angular-app',
    templateUrl: 'app/templates/app.component.html',
    providers: [
        ProjectsService,
        LanguageService
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

    constructor(private _translate: TranslateService, private _languageService:LanguageService) { 
        this._languageService.langChanged$.subscribe(event => this.changeLang(event));
    }

    ngOnInit() {
        this._translate.setDefaultLang('en');
        this._translate.use(this._languageService.getLanguage());
    }

    changeLang(newLang):void {
        this._translate.use(newLang);
    }
}
