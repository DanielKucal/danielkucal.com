import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';


@Injectable()
export class ProjectsService {
    private _dataUrl = 'http://danielkucal.com/api/projects.json';

    constructor(private _http: Http) {}

    getData(){
        return this._http
            .get(this._dataUrl)
            .map(request => <Object[]> request.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}