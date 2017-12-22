import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user1.component.html'
})
export class UserOneComponent implements OnInit {
    data = [];
    test = [
        {id:'1'},{id:'3'},{id:'10'},{id:'13'},{id:'14'},
        {id:'17'},{id:'32'},{id:'34'},{id:'36'},{id:'39'}, 
        {id:'40'},{id:'47'},{id:'50'},{id:'104'},{id:'110'},
        {id:'111'},{id:'112'},{id:'122'},{id:'126'},{id:'130'}
       
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}
