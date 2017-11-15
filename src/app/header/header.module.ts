import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { BarComponent } from './tabbar/tab.component';
import { TitleComponent } from './title/title.component';
@NgModule({
    declarations: [
        HeaderComponent,
        BarComponent,
        TitleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})

export class HeaderModule { }