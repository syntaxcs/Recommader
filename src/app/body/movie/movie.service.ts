import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MovieService {
    constructor(private http: Http) {

    }
    private url: string = "http://localhost:4200/movie";
    // showMovie() {
    //     return this.http.get(this.url).map((response: Response) => response.json());
    // }
}