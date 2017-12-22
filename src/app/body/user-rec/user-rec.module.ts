import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRecommenComponent } from './user-rec.component';
import { UserOneComponent } from './user1/user1.component';
import { DataService } from '../../data.service';
const appRoutes: Routes = [
    {
        path: 'user1', component: UserOneComponent
    },
]
@NgModule({
    declarations: [
        UserRecommenComponent,
        UserOneComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        UserRecommenComponent
    ],
    providers: [],
    bootstrap: [UserRecommenComponent]
})
export class UserRecModule { }
