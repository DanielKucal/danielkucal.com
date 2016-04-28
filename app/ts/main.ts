import {bootstrap}    from 'angular2/platform/browser';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from "angular2/http";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";
import {enableProdMode} from "angular2/core";

enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS
]);
