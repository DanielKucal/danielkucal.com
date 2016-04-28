import {Injectable, EventEmitter} from "angular2/core";


@Injectable()
export class LanguageService {
    public langChanged$:EventEmitter<String>;
    private _currentLanguage:string;
    private _languages= {
        en: "English",
        pl: "Polski"
    };

    constructor(){
        this.langChanged$ = new EventEmitter();
        this._currentLanguage = localStorage.getItem('lang') || navigator.language.split('-')[0];
        if (!this._languages.hasOwnProperty(this._currentLanguage)) {
            this._currentLanguage = 'en';
        }
    }

    public setLang(newLanguage:string):void{
        if (newLanguage === this._currentLanguage)
            return;
        this._currentLanguage = newLanguage;
        this.langChanged$.emit(newLanguage);
        localStorage.setItem('lang', newLanguage);
    }
    
    public getLanguage():string{
        return this._currentLanguage;
    }

    public getLanguages():Object{
        return this._languages;
    }
}
