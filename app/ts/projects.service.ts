import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";


@Injectable()
export class ProjectsService {
    private _projects: Promise<Object[]>;
    private _language: String = 'en';
    private _getDataUrl(){
        return 'http://danielkucal.com/api/projects.' + this._language + '.json';
    }

    constructor(private _http: Http) {}

    getData(){
        return this._http
            .get(this._getDataUrl())
            .map(request => <Object[]> request.json())
            .catch(this.handleError);
    }
    
    getProjects(newLang = 'en'): Promise<Object[]> {
        if (this._projects === undefined || this._projects === null || newLang !== this._language) {
            this._language = newLang;
            this._projects = this.getData().toPromise();
        }
        return this._projects;
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}