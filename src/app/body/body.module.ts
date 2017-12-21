import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component';
import { BarComponent } from './tabbar/tab.component';
import { ToptenComponent } from './Content/Top-10.component';
import { SearchComponent } from './Search/search.component';
import { MovieComponent } from './movie/movie.component';
import { SlideComponent } from './firstpage/slide.component';
import { BothComponent } from './both/both.component';
import { LoginComponent } from './login/login.component';
import { RecomComponent } from './Recom/recom.component';
import { WarComponent } from './Genres/War/war.component';
import { WesternComponent } from './Genres/Western/western.component';
import { ChildrenComponent } from './Genres/Children/children.component';
import { MysteryComponent  } from './Genres/Mystery/mystery.component';
import { CrimeComponent  } from './Genres/Crime/crime.component';
import { AnimationComponent  } from './Genres/Animation/animation.component';
import { HorrorComponent  } from './Genres/Horror/horror.component';
import { ThrillerComponent  } from './Genres/Thriller/thriller.component';

const appRoutes: Routes = [
    {
        path: '', component: BothComponent
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
        path:'top', component:  ToptenComponent
    },
    {
        path:'login',component: LoginComponent
    },
    {
        path:'Recom',component: RecomComponent
    },
    {
        path:'War',component: WarComponent
    },
    {
        path:'Western',component: WesternComponent
    },
    {
        path:'Children',component: ChildrenComponent
    },
    {
        path:'Mystery',component: MysteryComponent
    },
    {
        path:'Crime',component: CrimeComponent
    },
    {
        path:'Animation',component: AnimationComponent
    },
    {
        path:'Horror',component: HorrorComponent
    },
    {
        path:'Thriller',component: ThrillerComponent
    },
   

];

@NgModule({
    declarations: [
        BodyComponent,
        BarComponent,
        ToptenComponent,
        SearchComponent,
        MovieComponent,
        SlideComponent,
        BothComponent,
        LoginComponent,
        RecomComponent,
        WarComponent,
        WesternComponent,
        ChildrenComponent,
        MysteryComponent,
        CrimeComponent,
        AnimationComponent,
        HorrorComponent,
        ThrillerComponent
        
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