import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NgModule } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';
 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { Header1Component } from './header1/header1.component';
import { UploadSection2Component } from './upload-section2/upload-section2.component';
import { ViaApiComponent } from './via-api/via-api.component';
import { AnyDeviceComponent } from './any-device/any-device.component';
import { WebPlayerComponent } from './web-player/web-player.component';
import { TimeBasedComponent } from './time-based/time-based.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { Footer1Component } from './footer1/footer1.component';
import { SayComponent } from './say/say.component';
import { PricingComponent } from './pricing/pricing.component';
import { CustomRadioButtonsComponent } from './custom-radio-buttons/custom-radio-buttons.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Common1Component } from './common1/common1.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { OthersComponent } from './others/others.component';
 @NgModule({
   declarations: [AppComponent, HomepageComponent, Header1Component, UploadSection2Component, ViaApiComponent, AnyDeviceComponent, WebPlayerComponent, TimeBasedComponent, KeyFeaturesComponent, Footer1Component, SayComponent, PricingComponent, CustomRadioButtonsComponent, FileManagerComponent, SignUpComponent, LoginComponent, FaqsComponent, ContactUsComponent, FeaturesComponent, AboutUsComponent, Common1Component, WhatWeDoComponent, OurStoryComponent, DashboardComponent, SupportComponent, SettingsComponent, OthersComponent],
   imports: [
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     AppRoutingModule,
     NgxPaginationModule,
     Ng2SearchPipeModule,
     FormsModule,
     PerfectScrollbarModule,
     NgApexchartsModule
   ],
   bootstrap: [AppComponent],
 })
 export class AppModule {
 }
 