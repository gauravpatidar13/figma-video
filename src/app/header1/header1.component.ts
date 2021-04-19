import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  $("#btn").click(function(){
$("nav").toggleClass("active");
  })
  $("#close").click(function(){
    $("nav").toggleClass("active");
      })
  }

}
