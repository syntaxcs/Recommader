import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent {
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    //this.dataService.fetchData();
  }
}
