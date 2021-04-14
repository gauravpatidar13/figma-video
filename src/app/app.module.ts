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
 
 @NgModule({
   declarations: [AppComponent, HomepageComponent, Header1Component, UploadSection2Component, ViaApiComponent, AnyDeviceComponent, WebPlayerComponent, TimeBasedComponent, KeyFeaturesComponent, Footer1Component, SayComponent, PricingComponent],
   imports: [
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     AppRoutingModule,
   ],
   bootstrap: [AppComponent],
 })
 export class AppModule {
 }
 