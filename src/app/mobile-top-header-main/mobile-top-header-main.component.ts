import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-mobile-top-header-main',
  templateUrl: './mobile-top-header-main.component.html',
  styleUrls: ['./mobile-top-header-main.component.css']
})
export class MobileTopHeaderMainComponent implements OnInit {

  constructor(private ss:SidebarService) { }

  ngOnInit(): void {
  }
  openSidebar(){
    this.ss.openSidebar("open sidebar");
  }
}
