import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { RecomComponent } from './Recom/recom.component';
import { WarComponent } from './War/war.component';
import { WesternComponent } from './Western/western.component';
import { ChildrenComponent } from './Children/children.component';
import { MysteryComponent  } from './Mystery/mystery.component';
import { CrimeComponent  } from './Crime/crime.component';
import { AnimationComponent  } from './Animation/animation.component';
import { HorrorComponent  } from './Horror/horror.component';
import { ThrillerComponent  } from './Thriller/thriller.component';
import { GenresComponent } from './genres.component';
import { actionComponent } from './Action/action.component';
import { adventureComponent }from './adveture/adventure.component';
import { comedyComponent } from './comedy/comedy.component';
import { dramaComponent } from './drama/drama.component';
import { fantasyComponent } from './fantasy/fantasy.component';
import { romanceComponent } from './romance/romance.component';
import { scifiComponent } from './scifi/scifi.component'
const appRoutes: Routes = [
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
        GenresComponent,
        WarComponent,
        WesternComponent,
        ChildrenComponent,
        MysteryComponent,
        CrimeComponent,
        AnimationComponent,
        HorrorComponent,
        ThrillerComponent,
        actionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        GenresComponent
    ],
    providers: [],
    bootstrap: [GenresComponent]
})

export class GenresModule { }