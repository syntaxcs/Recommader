import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Movie } from './movie.model';
@Injectable()
export class DataService {
    constructor(private http: Http) { }
    fetchData() {
        this.http.get('../assets/movie.json').map(
            (response) => response.json()
        ).subscribe(
            (data) => console.log(data)
            )
    }

}