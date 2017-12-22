import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UserRecommenComponent} from './user-rec.component';
import { UserOneComponent} from './user1/user1.component';
import { DataService } from '../../data.service';
import { UserTwoComponent } from './user2/user2.component';
import { UserthreeComponent } from './user3/user3.component';
import { UserFourComponent } from './user4/user4.component';
import { UserFiveComponent } from './user5/user5.component';
import { UserSixComponent } from './user6/user6.component';
import { UserSevenComponent } from './user7/user7.component';
import { UserEaghComponent } from './user8/user8.component';
import { UserNineComponent } from './user9/user9.component';
import { UserTenComponent } from './user10/user10.component';
const appRoutes: Routes = [
    {
        path: 'user1', component: UserOneComponent
    },
    {
        path: 'user2', component: UserTwoComponent
    },
    {
        path: 'user3', component: UserthreeComponent
    },
    {
        path: 'user4', component: UserFourComponent
    },
    {
        path: 'user5', component: UserFiveComponent
    },
    {
        path: 'user6', component: UserSixComponent
    },
    {
        path: 'user7', component: UserSevenComponent
    },
    {
        path: 'user8', component: UserEaghComponent
    },
    {
        path: 'user9', component: UserNineComponent
    },
    {
        path: 'user10', component: UserTenComponent
    }
]
@NgModule({
    declarations: [
        UserRecommenComponent,
        UserOneComponent,
        UserTwoComponent,
        UserthreeComponent,
        UserFourComponent,
        UserFiveComponent,
        UserSixComponent,
        UserSevenComponent,
        UserEaghComponent,
        UserNineComponent,
        UserTenComponent
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
