import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body.component';
import { MovieModule } from './movie/movie.module';
import { BarComponent }from'./tabbar/tab.component';
import { SlideComponent }from'./firstpage/slide.component';
import { ToptenComponent }from'./Content/Top-10.component';
@NgModule({
    declarations: [
        BodyComponent,
        BarComponent,
        SlideComponent,
        ToptenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MovieModule
    ],
    exports: [
        BodyComponent
    ],
    providers: [],
    bootstrap: [BodyComponent]
})

export class BodyModule { }