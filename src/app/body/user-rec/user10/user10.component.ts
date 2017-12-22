import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user10.component.html'
})
export class UserTenComponent implements OnInit {
    data = [];
    test = [
        {id:'35836'},{id:'40819'},{id:'41566'},{id:'41569'},{id:'48385'},
        {id:'48783'},{id:'50068'},{id:'59501 '},{id:'84236'},{id:'100714'}, 
        {id:'100745'},{id:' 100843'},{id:'121491'},{id:'121618'},{id:'125916'},
        {id:'126006'},{id:'126106'},{id:'126420'},{id:'126430'},{id:'128520'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}