import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie/movie.service';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit{
    constructor(private movieService: MovieService)
    movie=[];
    ngOnInit(){
        this.movieService.showMovie().subscribe(responseMovie => this.movie = responseMovie);
    }
}