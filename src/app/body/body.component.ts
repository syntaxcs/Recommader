import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie/movie.service';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
<<<<<<< HEAD
export class BodyComponent {

=======
export class BodyComponent implements OnInit{
    constructor(private movieService: MovieService)
    movie=[];
    ngOnInit(){
        this.movieService.showMovie().subscribe(responseMovie => this.movie = responseMovie);
    }
>>>>>>> 8dc28cebf8ae0694af9f61141335f6ac6b552551
}