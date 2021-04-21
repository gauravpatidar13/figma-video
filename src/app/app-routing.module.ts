import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomRadioButtonsComponent } from './custom-radio-buttons/custom-radio-buttons.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
 {path:'',component:HomepageComponent},
 {path:'file-manager',component:FileManagerComponent},
 {path:'crb',component:CustomRadioButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
