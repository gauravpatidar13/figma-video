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
    let path="file-manager"
    if(path){
      localStorage.removeItem(path)
      this.router.navigate([path])
    }
  }
  ngOnInit(): void {
   
  }
}
