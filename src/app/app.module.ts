import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudioComponent } from './studio/studio.component';
import { MissionComponent } from './mission/mission.component';
import { ManagementComponent } from './management/management.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { ServiceComponent } from './service/service.component';
import { CreativeComponent } from './creative/creative.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudioComponent,
    MissionComponent,
    ManagementComponent,
    FeaturesComponent,
    TeamComponent,
    ServiceComponent,
    CreativeComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
