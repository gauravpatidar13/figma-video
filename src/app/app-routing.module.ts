import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomRadioButtonsComponent } from './custom-radio-buttons/custom-radio-buttons.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
 {path:'',component:HomepageComponent},
 {path:'file-manager',component:FileManagerComponent},
 {path:'sign-up',component:SignUpComponent},
 {path:'login',component:LoginComponent},
 {path:'faqs',component:FaqsComponent},
 {path:'contact-us',component:ContactUsComponent},
 {path:'crb',component:CustomRadioButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
