import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { UserRecommenComponent} from './user-rec.component';
import { UserOneComponent} from './user1/user1.component';



=======
import { UserRecommenComponent } from './user-rec.component';
import { UserOneComponent } from './user1/user1.component';
import { DataService } from '../../data.service';
>>>>>>> 381f4a24a26652bd403c7f71b66d801dffda162a
const appRoutes: Routes = [
    {
        path: 'user1', component: UserOneComponent
    },
<<<<<<< HEAD
    // {
    //     path: 'user2', component: UserTwoComponent
    // }
=======
>>>>>>> 381f4a24a26652bd403c7f71b66d801dffda162a
]
@NgModule({
    declarations: [
        UserRecommenComponent,
        UserOneComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
<<<<<<< HEAD
       // RouterModule.forRoot(appRoutes),
=======
        RouterModule.forRoot(appRoutes)
>>>>>>> 381f4a24a26652bd403c7f71b66d801dffda162a
    ],
    exports: [
        UserRecommenComponent
    ],
    providers: [],
    bootstrap: [UserRecommenComponent]
})
export class UserRecModule { }
