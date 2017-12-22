import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user9.component.html'
})
export class UserNineComponent implements OnInit {
    data = [];
    test = [
        {id:'3671'},{id:'3897'},{id:'3948'},{id:'3949 '},{id:'3996'},
        {id:'4011'},{id:'4014'},{id:'1018 '},{id:'4025'},{id:'4034'}, 
        {id:'4226'},{id:'4262'},{id:'4447'},{id:'4063 '},{id:'4973 '},
        {id:' 4995'},{id:'5064'},{id:'5299 '},{id:'5349'},{id:'5445'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}