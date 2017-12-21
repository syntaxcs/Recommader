import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRecommenComponent } from './user-rec.component';
import { UserOneComponent } from './user1/user1.component';
import { DataService } from '../../data.service';
@NgModule({
    declarations: [
        UserRecommenComponent,
        UserOneComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        UserRecommenComponent
    ],
    providers: [],
    bootstrap: [UserRecommenComponent]
})
export class UserRecModule { }
