import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { SidebarService } from '../sidebar.service';
declare var $:any;
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

export class OthersComponent implements OnInit,AfterViewInit {
  menu:MENU;
  constructor(private ss:SidebarService) { 
  }
  ngAfterViewInit(): void {
   
  }
  setMenu(item){
  
this.menu=item;
if($("#sidenavId").hasClass("opened-sidenav")&&$(".header-mobile").hasClass("opened-mobile")){
  this.closeSidebar()
}
  }

  ngOnInit(): void {
    this.ss.subject.subscribe(value=>{
      
      if(value=="open sidebar"){
        $("#sidenavId").addClass("opened-sidenav")
        $("#sidenavId").css({height:$(document).height()-125})
        $("#sidenavId").removeClass("closed-sidenav")
        $(".header-mobile").addClass("opened-mobile")
        $(".header-mobile").removeClass("closed-mobile")
      }
    })
  }
  closeSidebar(){
    $("#sidenavId").removeClass("opened-sidenav")
    $("#sidenavId").addClass("closed-sidenav")
    $(".header-mobile").removeClass("opened-mobile")
    $(".header-mobile").addClass("closed-mobile")
  }
  
}