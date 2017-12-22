import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
@Component({
    selector: 'app-user-one',
    templateUrl: './user8.component.html'
})
export class UserEaghComponent implements OnInit {
    data = [];
    test = [
        {id:'2339'},{id:'2344'},{id:'2391'},{id:'2396 '},{id:'2406 '},
        {id:'2424'},{id:'2454'},{id:'2467 '},{id:'2501'},{id:'2502'}, 
        {id:'2529'},{id:'2539'},{id:'2571 '},{id:'2640 '},{id:'2638'},
        {id:'2692'},{id:'2694'},{id:'2706'},{id:'2716'},{id:'2723'}
    ];
    constructor(private dataService: DataService){}
    
    ngOnInit(){
        this.dataService.fetchData()
        .subscribe(res => this.data = res);
    }

}