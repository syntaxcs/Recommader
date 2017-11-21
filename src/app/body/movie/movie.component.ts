import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie/movie.service';
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html'
})
export class MovieComponent {
    constructor(private movieService: MovieService)
    movie=[];
    ngOnInit(){
        this.movieService.showMovie().subscribe(responseMovie => this.movie = responseMovie);
    }

}