import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ProjectsService} from './projects.service';
import {ProjectsComponent} from './projects.component';
import {Observable}       from 'rxjs/Observable';
import {LanguagePickerComponent} from "./language-picker.component";

@Component({
    selector: 'angular-app',
    templateUrl: 'app/templates/app.component.html',
    providers: [
        ProjectsService,
        HTTP_PROVIDERS
    ],
    directives: [
        ProjectsComponent,
        LanguagePickerComponent
    ]
})
export class AppComponent {
    public languages = {
        eng: "English",
        pl: "Polski"
    };
    public chosenLang:String = null;

    changeLang(newLang):void {
        this.chosenLang = newLang;
    }
}
