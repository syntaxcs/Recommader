import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-two',
    templateUrl: './user2.component.html'
})
export class UserTwoComponent implements OnInit {
    data = [];
    test = [
        {id:'357'},{id:'364'},{id:'367'},{id:'377'},{id:'380'},
        {id:'440'},{id:'454'},{id:'457 '},{id:'468'},{id:'480'}, 
        {id:'497'},{id:'500'},{id:'508'},{id:'509 '},{id:'515'},
        {id:'537'},{id:'534'},{id:'537'},{id:'541'},{id:'543'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}