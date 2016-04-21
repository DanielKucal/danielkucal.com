import {Component, Input, Output, EventEmitter} from "angular2/core";
import {ToIterablePipe} from "./pipes/to-iterable.pipe";

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
    @Input() languages: Object;
    @Output() langChange: EventEmitter = new EventEmitter();
    public clicked:Boolean = false;

    select(value) {
        this.langChange.emit(value);
        this.toggle();
    }

    toggle() {
        this.clicked = !this.clicked;
    }
}