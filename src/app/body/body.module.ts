import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body.component';

import{BarComponent}from'./tabbar/tab.component';
@NgModule({
    declarations: [
        BodyComponent,
        BarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        BodyComponent
    ],
    providers: [],
    bootstrap: [BodyComponent]
})

export class BodyModule { }