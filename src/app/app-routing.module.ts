import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomRadioButtonsComponent } from './custom-radio-buttons/custom-radio-buttons.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FeaturesComponent} from './features/features.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PricingComponent} from './pricing/pricing.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SupportComponent} from './support/support.component';
import {SettingsComponent} from './settings/settings.component';
import { StaticsComponent } from './statics/statics.component';
const routes: Routes = [
 {path:'',component:HomepageComponent,pathMatch:'full'},
 {path:'file-manager',component:FileManagerComponent},
 {path:'statics',component:StaticsComponent},
 {path:'settings',component:SettingsComponent},
 {path:'support',component:SupportComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:'pricing',component:PricingComponent},
 {path:'features',component:FeaturesComponent},
 {path:'about-us',component:AboutUsComponent},
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
