import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BothComponent} from './both.component';
import {SlideComponent} from './firstpage/slide.component';
import {MovieComponent} from './movie/movie.component';

@NgModule({
    declarations: [
        BothComponent,
        SlideComponent,
        MovieComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        BothComponent
    
    ],
    providers: [],
    bootstrap: [ BothComponent]
})

export class BothModule { }