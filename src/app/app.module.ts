import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyMastersComponent } from './party-masters/party-masters.component';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ImageshowComponent } from './imageshow/imageshow.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyMastersComponent,
    FormComponent,
    HeaderComponent,
    ImageshowComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
    // NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
