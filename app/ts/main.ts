import {bootstrap}    from 'angular2/platform/browser';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from "angular2/http";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS
]);
