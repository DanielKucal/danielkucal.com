import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ProjectsService} from './projects.service';
import {TagsComponent} from "./tags.component";

@Component({
    selector: 'projects',
    templateUrl: 'app/templates/projects.component.html',
    directives: [
        TagsComponent
    ],
})

export class ProjectsComponent implements OnInit {
    private _allProjects: Promise<Object[]>;
    public projects: Promise<Object[]>;

    constructor(private _projectsService: ProjectsService) {}

    getData(){
        this._allProjects = this._projectsService.getData().toPromise();
        this.projects = this._allProjects;
    }

    ngOnInit(){
        this.getData();
    }

    onTagChoice(tag: String){
        if (tag === null)
            return this._allProjects;
        let chosenProjects = [];
        this._allProjects
            .then((projects) => {
                chosenProjects = projects.filter((project) => {
                    console.log(project);
                    return (project.technologies.indexOf(tag) > -1);
                })
            })
            .then(() => {
                this.projects = new Promise<Object[]>((resolve) => resolve(chosenProjects));
                console.log(chosenProjects);
            });
    }
}
