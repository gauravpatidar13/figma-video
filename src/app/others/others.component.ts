import { Component, OnInit } from '@angular/core';
export enum MENU{
  DASHBOARD,
  FILE_MANAGER,
  UPLOAD_VIDEO,
  STATICS,
  SETTINGS,
  SUPPORT
  }
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})

export class OthersComponent implements OnInit {
  menu:MENU;
  constructor() { 
    this.menu=0;
    console.log(this.menu)
  }
  setMenu(item){
this.menu=item;
  }

  ngOnInit(): void {
  }

}
