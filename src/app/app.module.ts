import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleAlsoAskComponent } from './people-also-ask/people-also-ask.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProfileComponent,
    AboutComponent,
    FooterComponent,
    PeopleAlsoAskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
