import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private ss:SidebarService) { }
  ngOnInit(): void {
  }
  openSidebar(){
this.ss.openSidebar(true);
  }
}
