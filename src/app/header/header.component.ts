import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'http://www.google.com';

  constructor() { }

  ngOnInit() {

    // let self = this;
    // setTimeout(function() {
    //   self.sitename = 'The Will Will Web';
    // }, 3000);

    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 3000);

  }

}
