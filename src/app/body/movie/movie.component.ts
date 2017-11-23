import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MovieService } from './movie.service';

=======
import { MovieService } from './movie/movie.service';
>>>>>>> 8dc28cebf8ae0694af9f61141335f6ac6b552551
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html'
})
export class MovieComponent {
<<<<<<< HEAD


=======
    constructor(private movieService: MovieService)
    movie=[];
    ngOnInit(){
        this.movieService.showMovie().subscribe(responseMovie => this.movie = responseMovie);
    }
>>>>>>> 8dc28cebf8ae0694af9f61141335f6ac6b552551

}