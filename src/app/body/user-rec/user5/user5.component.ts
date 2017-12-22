import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user5.component.html'
})
export class UserFiveComponent implements OnInit {
    data = [];
    test = [
        {id:'1329'},{id:'1330'},{id:'1331'},{id:'1332'},{id:'1333'},
        {id:'1337'},{id:'1339'},{id:'1340 '},{id:'1341'},{id:'1342'}, 
        {id:'1343'},{id:'1344'},{id:'1345'},{id:'1346 '},{id:'1347'},
        {id:'1348'},{id:'1349'},{id:'1352'},{id:'1353'},{id:'1354'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}