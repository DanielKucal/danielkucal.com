import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";


@Injectable()
export class PersonalInformationService {
    private _information: Promise<Object>;
    private _getDataUrl(){
        return 'http://danielkucal.com/api/about.json';
    }

    constructor(private _http: Http) {}

    private _getData(){
        return this._http
            .get(this._getDataUrl())
            .map(request => <Object> request.json())
            .catch(this.handleError);
    }

    getInformation(): Promise<Object> {
        if (this._information === undefined || this._information === null) {
            this._information = this._getData().toPromise();
        }
        return this._information;
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}