import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
 subject=new Subject();
  constructor() { }
  openSidebar(bool){
    this.subject.next("open sidebar");
  }
}
