import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
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
    public chosenTag: String = 'any';
    @Output() onTagChoice = new EventEmitter<String>();

    constructor(private _projectsService: ProjectsService) {}

     private getTags(){
        return new Promise<Object>((resolve, reject) => {
            let tags = {};
            this._projectsService.getProjects()
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
                    this._projectsService.getProjects().then((data) => tags['any'] = data.length);
                    resolve(tags);
                });
        });
    }

    ngOnInit(){
        this.tags = this.getTags();
    }

    chooseTag(tag:String){
        this.chosenTag = tag;
        this.onTagChoice.emit(tag);
    }
}
