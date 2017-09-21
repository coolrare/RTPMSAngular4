import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = '123';
  clearKeyword($event: KeyboardEvent) {
    if ($event.keyCode == 27) {
      this.keyword = '';
    }
  }
  setKeyword(str) {
    this.keyword = str;
  }
}
