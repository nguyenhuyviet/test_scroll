import { AfterViewInit, Component, OnInit } from '@angular/core';
// const StickySidebar = require('sticky-sidebar');
import StickySidebar from 'sticky-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  
  
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
  let d =  document.getElementById('sidebar');

    var a = new StickySidebar('#sidebar', {
			topSpacing: 74,
			bottomSpacing: 20,
			containerSelector: '.container',
			innerWrapperSelector: '.sidebar__inner'
		});
  }
}
