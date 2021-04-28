import { Component } from '@angular/core';
import {filter} from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design';
  route;
  constructor(private router:Router){
this.router.events.pipe(filter(event=>
event instanceof NavigationEnd)).subscribe((data:any)=>
  this.route=data.url)
  }
  ngOnInit(): void {
   
  }
}
