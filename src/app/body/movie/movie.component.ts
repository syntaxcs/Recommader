import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html'
})
export class MovieComponent {
    constructor(private movieService: DataService) {

    }
    ngOnInit() {
        this.movieService.fetchData();
    }
}