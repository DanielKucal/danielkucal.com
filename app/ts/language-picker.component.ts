import {Component} from "angular2/core";
import {ToIterablePipe} from "./pipes/to-iterable.pipe";
import {LanguageService} from "./language.service";

@Component({
    selector: 'language-picker',
    template: `
    <div class="language-picker">
    <span class="clickable" (click)="toggle()">Language&nbsp;&#9660;</span>
    <div class="languages" *ngIf="clicked">
      <span class="option" *ngFor="#language of languages | toIterable" (click)="select(language.key)">
      {{language.val}}
      <img src="http://danielkucal.com/img/flag-{{language.key}}.png" class="pull-right" />
      </span>
    </div>
    </div>
  `,
    pipes: [
        ToIterablePipe
    ]
})
export class LanguagePickerComponent {
    public languages:Object;
    public clicked:Boolean = false;

    constructor(private _languageService:LanguageService){
        this.languages = this._languageService.getLanguages();
    }

    select(value) {
        this._languageService.setLang(value);
        this.toggle();
    }

    toggle() {
        this.clicked = !this.clicked;
    }
}