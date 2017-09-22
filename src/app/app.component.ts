import { Component } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = '123';
  constructor(public datasvc: DataService) {
  }
  clearKeyword($event: KeyboardEvent) {
    if ($event.keyCode == 27) {
      this.keyword = '';
    }
  }
  doSearch(str) {
    // this.keyword
  }
}
