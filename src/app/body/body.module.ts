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
import { GenresComponent } from './Genres/genres.component';
import { GenresModule } from './Genres/genres.module';
import { RecomComponent } from './Recom/recom.component';
import { UserRecommenComponent } from './user-rec/user-rec.component';
import { UserRecModule } from './user-rec/user-rec.module'
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
        path:'genres',component: GenresComponent
    },
    {
        path:'recommend',component: RecomComponent
    }
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
        RecomComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        GenresModule,
        UserRecModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        BodyComponent
    ],
    providers: [],
    bootstrap: [BodyComponent]
})

export class BodyModule { }