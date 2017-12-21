import { Component, OnInit } from '@angular/core';
import { UserOneComponent } from './user1/user1.component'
import { DataService } from '../../data.service';
@Component({
    selector: 'app-user-rec',
    templateUrl: './user-rec.component.html'
})
export class UserRecommenComponent implements OnInit {
    data = [];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }
}