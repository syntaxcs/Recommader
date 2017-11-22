import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
    constructor() { }
    cars = ['dof', 'dee', 'doo'
    ];
    mydata(){
        return 'This is my data man!';
    }
}