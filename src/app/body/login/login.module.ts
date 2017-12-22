import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserRecommenComponent} from '../user-rec/user-rec.component';
import { UserOneComponent} from '../user-rec/user1/user1.component';
import { UserRecModule } from '../user-rec/user-rec.module';

@NgModule({
    declarations: [
        UserRecommenComponent,
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

export class GenresModule { }