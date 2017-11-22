import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';
@NgModule({
    declarations: [
        MovieComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        MovieComponent
    ],
    providers: [MovieService],
    bootstrap: [MovieComponent]
})

export class MovieModule { }