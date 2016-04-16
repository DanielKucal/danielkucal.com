import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';


@Injectable()
export class ProjectsService {
    private _projects: Promise<Object[]>;
    private _dataUrl = 'http://danielkucal.com/api/projects.json';

    constructor(private _http: Http) {}

    getData(){
        return this._http
            .get(this._dataUrl)
            .map(request => <Object[]> request.json())
            .catch(this.handleError);
    }
    
    getProjects(): Promise<Object[]> {
        if (this._projects === undefined || this._projects === null) {
            this._projects = this.getData().toPromise();
        }
        return this._projects;
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}