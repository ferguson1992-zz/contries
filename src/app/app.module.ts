import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router
import { app_routing } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContryComponent } from './components/contry/contry.component';
import { HeaderComponent } from './components/layout/header/header.component';

//services


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
