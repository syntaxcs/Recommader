import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MovieService {
    constructor(private http: Http) {

    }
<<<<<<< HEAD

=======
    private url: string = "http://localhost:4200/movie";
    showMovie() {
        return this.http.get(this.url).map((response: Response) => response.json());
    }
>>>>>>> 8dc28cebf8ae0694af9f61141335f6ac6b552551
}