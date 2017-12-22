import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user1.component.html'
})
export class UserOneComponent implements OnInit {
    data = [];
    test = [
        {id:'1247'},{id:'1250'},{id:'1258'},{id:' 1259'},{id:'1260'},
        {id:'1261'},{id:'1262'},{id:'1264 '},{id:'1265 '},{id:'1270'}, 
        {id:'1275'},{id:'1276'},{id:'1278 '},{id:'1279 '},{id:'1280'},
        {id:'1281'},{id:'1282'},{id:'1284'},{id:'1285'},{id:'1287'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}