import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {ProjectsService} from './projects.service';
import {TagsComponent} from "./tags.component";
import {TranslatePipe} from "ng2-translate/ng2-translate";
import {LanguageService} from "./language.service";

@Component({
    selector: 'projects',
    templateUrl: 'app/templates/projects.component.html',
    styleUrls: [ 'app/css/projects.css' ],
    directives: [
        TagsComponent
    ],
    pipes: [
        TranslatePipe
    ],
    encapsulation: ViewEncapsulation.None
})

export class ProjectsComponent implements OnInit {
    public projects: Promise<Object[]>;
    private _tag:String = null;

    constructor(private _projectsService: ProjectsService, private _languageService:LanguageService) {
        this._languageService.langChanged$.subscribe(event => this.onLangChange(event));
    }

    getData():Promise<Object[]>{
        this.projects = this._projectsService.getProjects(this._languageService.getLanguage());
        return this.projects;
    }

    ngOnInit(){
        this.getData();
    }

    onTagChoice(tag: String){
        if (tag === null || tag === 'any') {
            this.projects = new Promise(
                resolve => resolve(this.getData())
            );
            return;
        }
        this._tag = tag;
        let chosenProjects = [];
        this.getData()
            .then((projects) => {
                chosenProjects = projects.filter((project) => {
                    return (project.technologies.indexOf(tag) > -1);
                })
            })
            .then(() => {
                this.projects = new Promise<Object[]>((resolve) => resolve(chosenProjects));
            });
    }

    onLangChange(newLang){
        this.getData();
        this.onTagChoice(this._tag);
    }
}
