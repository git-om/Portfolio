import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleAlsoAskComponent } from './people-also-ask/people-also-ask.component';

import {UiStyleToggleService} from './theme-services/ui-style-toggle.service'
import {StorageService} from "./theme-services/local-storage.service";

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}


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
  providers: [UiStyleToggleService,
    StorageService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
