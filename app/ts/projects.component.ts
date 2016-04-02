import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ProjectsService} from './projects.service';

@Component({
    selector: 'projects',
    templateUrl: 'app/templates/projects.component.html'
})

export class ProjectsComponent implements OnInit {
    public projects: Observable<Object[]>;

    constructor(private _projectsService: ProjectsService) {}

    getData(){
        this.projects = this._projectsService.getData();
    }

    ngOnInit(){
        this.getData();
    }
}
