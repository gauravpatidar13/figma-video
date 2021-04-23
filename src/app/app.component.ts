import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design';
  constructor(private router:Router){
    let path=localStorage.getItem("path");
    if(path){
      localStorage.removeItem('path')
      console.log(path.split("/")[1])
      this.router.navigate(["../"+path.split("/")[1]])
    }
  }
  ngOnInit(): void {
   
  }
}
