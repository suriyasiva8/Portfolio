import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolsModule } from './tools/tools.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfilePageTwoComponent } from './profile-page-two/profile-page-two.component';
import { Header2Component } from './header/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePageComponent,
    ProfilePageTwoComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
