import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  p=0;
  term;
files=[
  {name:"my_video.mp4",size:"6.94MB",views:0,status:"Completed",flag:false,createdAt:"2 days ago"},
  {name:"my_video.mp4",size:"6.94MB",views:0,status:"Completed",flag:true,createdAt:"2 days ago"},
  {name:"my_video.mp4",size:"6.94MB",views:0,status:"Completed",flag:false,createdAt:"2 days ago"},
  {name:"my_video3.mp4",size:"6.94MB",views:0,status:"Completed",flag:false,createdAt:"2 days ago"},
  {name:"my_video.mp4",size:"6.94MB",views:0,status:"Completed",flag:false,createdAt:"2 days ago"},
  {name:"my_video3.mp4",size:"6.94MB",views:0,status:"Completed",flag:false,createdAt:"2 days ago"},
  {name:"my_video.mp4",size:"6.94MB",views:0,status:"Completed",flag:false,createdAt:"2 days ago"}
];
  constructor() { }

  ngOnInit(): void {
  }

}
