import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user6.component.html'
})
export class UserSixComponent implements OnInit {
    data = [];
    test = [
        {id:'1393'},{id:'1394'},{id:'1395'},{id:'1396'},{id:'1397'},
        {id:'1398'},{id:'1399'},{id:'1401 '},{id:' 1404'},{id:'1405'}, 
        {id:'1408'},{id:'1409'},{id:'1423'},{id:'1425 '},{id:'1427'},
        {id:'1428'},{id:'1485'},{id:'1500'},{id:'1518'},{id:'1537'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}