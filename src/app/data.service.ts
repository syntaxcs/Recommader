import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Movie } from './movie.model';


@Injectable()
export class DataService {
    private _url: string = "assets/movie.json"
    constructor(private http: Http) { }
    fetchData() {
        return this.http.get('../assets/movie.json').map(
            (response) => response.json()
        )
    }

}