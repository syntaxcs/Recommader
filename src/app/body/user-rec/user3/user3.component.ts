import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user1.component.html'
})
export class UserOneComponent implements OnInit {
    data = [];
    test = [
        {id:'1030'},{id:'1031'},{id:'1032'},{id:'1033'},{id:'1035'},
        {id:'1036'},{id:'1059'},{id:'1061  '},{id:'1073'},{id:'1079'}, 
        {id:'1080'},{id:'1089'},{id:'1097'},{id:'1125 '},{id:' 1127'},
        {id:'1136 '},{id:'1148'},{id:'1172'},{id:'1194'},{id:'1196'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}