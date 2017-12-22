import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user7.component.html'
})
export class UserSevenComponent implements OnInit {
    data = [];
    test = [
        {id:'1704'},{id:'1707'},{id:'1713'},{id:'1715'},{id:'1717'},
        {id:'1719'},{id:'1721 '},{id:'1722 '},{id:'1732'},{id:'1733'}, 
        {id:'1777'},{id:'1784 '},{id:'1858'},{id:'1884  '},{id:'1923'},
        {id:'1953'},{id:'1961'},{id:'1968'},{id:'1994'},{id:'543'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}