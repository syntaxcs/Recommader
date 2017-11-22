import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  constructor(private dataService: DataService){

  }
  somProperty: string = "";
  ngOnInit(){
    console.log(this.dataService.cars);
    this.somProperty = this.dataService.mydata();
  }
}
