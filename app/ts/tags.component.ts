import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ProjectsService} from './projects.service';
import {ToIterablePipe} from './pipes/to-iterable.pipe';
import {SortByValuesPipe} from './pipes/sort-by-values.pipe';

@Component({
    selector: 'tags',
    templateUrl: 'app/templates/tags.component.html',
    pipes: [
        ToIterablePipe,
        SortByValuesPipe
    ]
})

export class TagsComponent implements OnInit {
    public tags : Promise<Object>;
    constructor(private _projectsService: ProjectsService) {}

     private getTags(){
        return new Promise<Object>((resolve, reject) => {
            let tags = {};
            this._projectsService.getData().toPromise()
                .then((projects) => {
                    for (var project of projects) {
                        for (var tag of project.technologies) {
                            if (tags.hasOwnProperty(tag)) {
                                tags[tag]++;
                            } else {
                                tags[tag] = 1;
                            }
                        }
                    }
                })
                .then(() => {
                    resolve(tags);
                });
        });
    }

    ngOnInit(){
        this.tags = this.getTags();
    }
}
