import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
<<<<<<< HEAD


import { UserOneComponent} from '../user-rec/user1/user1.component';

const appRoutes: Routes = [
    {
        path: 'user1', component: UserOneComponent
    }
]
@NgModule({
    declarations: [
        LoginComponent,
=======
import { UserRecommenComponent} from '../user-rec/user-rec.component';
import { UserOneComponent} from '../user-rec/user1/user1.component';
import { UserRecModule } from '../user-rec/user-rec.module';

@NgModule({
    declarations: [
        UserRecommenComponent,
>>>>>>> 381f4a24a26652bd403c7f71b66d801dffda162a
        UserOneComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        UserRecModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [],
    bootstrap: [LoginComponent]
})

export class LoginModule { }