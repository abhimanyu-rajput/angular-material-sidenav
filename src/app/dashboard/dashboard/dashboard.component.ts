import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  smallNav() {
    
    let sidenav = document.getElementById('sidenav');
    let navToggle = document.getElementById('nav-toggle');

    navToggle?.classList.toggle('nav-toggle-small')
    sidenav?.classList.toggle('sidenav-small');
  }

}
