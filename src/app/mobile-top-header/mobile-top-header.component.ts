import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-mobile-top-header',
  templateUrl: './mobile-top-header.component.html',
  styleUrls: ['./mobile-top-header.component.css']
})
export class MobileTopHeaderComponent implements OnInit {

  constructor(private ss:SidebarService) { }

  ngOnInit(): void {
  }
  openSidebar(){
this.ss.openSidebar("open sidebar");
  }
}
