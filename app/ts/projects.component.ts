import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {ProjectsService} from './projects.service';
import {TagsComponent} from "./tags.component";

@Component({
    selector: 'projects',
    templateUrl: 'app/templates/projects.component.html',
    styleUrls: [ 'app/css/projects.css' ],
    directives: [
        TagsComponent
    ],
    encapsulation: ViewEncapsulation.None
})

export class ProjectsComponent implements OnInit {
    public projects: Promise<Object[]>;

    constructor(private _projectsService: ProjectsService) {}

    getData(){
        this.projects = this._projectsService.getProjects();
    }

    ngOnInit(){
        this.getData();
    }

    onTagChoice(tag: String){
        if (tag === null || tag === 'any') {
            this.projects = new Promise(
                resolve => resolve(this._projectsService.getProjects())
            );
            return;
        }
        let chosenProjects = [];
        this._projectsService.getProjects()
            .then((projects) => {
                chosenProjects = projects.filter((project) => {
                    return (project.technologies.indexOf(tag) > -1);
                })
            })
            .then(() => {
                this.projects = new Promise<Object[]>((resolve) => resolve(chosenProjects));
            });
    }
}
