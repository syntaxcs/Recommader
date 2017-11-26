import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body.component';

import { BarComponent } from './tabbar/tab.component';

import { ToptenComponent } from './Content/Top-10.component';
import { SearchComponent } from './Search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { BothComponent } from './both/both.component';


const appRoutes: Routes = [
    {
        path: 'both', component: BothComponent 
    },
    {
        path:'Content', component: ToptenComponent
    },
 
    {
        path:'search', component:  SearchComponent
    },
    {
        path:'tabbar', component:  BarComponent
    },
    {
        path:' ', component:  ToptenComponent
    }

];

@NgModule({
    declarations: [
        BodyComponent,
        BarComponent,
        BothComponent,
        ToptenComponent,
        SearchComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
       
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        BodyComponent
    ],
    providers: [],
    bootstrap: [BodyComponent]
})

export class BodyModule { }