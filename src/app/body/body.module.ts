import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body.component';
import { ItemComponent } from './item/item.component';
import { ProComponent } from './promotion/promotion.component';
@NgModule({
    declarations: [
        BodyComponent,
        ItemComponent,
        ProComponent
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